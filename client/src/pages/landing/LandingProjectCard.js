import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Card, Image, Header, Container } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroller";
import Comments from "../project/Comments"
import useContributor from "../../hooks/useContributor"
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardImage,
  CardComments,
  CardContributors,
  CardImageWrap,
  CardBody
} from "../../styles/LandingPageStyle";


const LandingProjectCard = (props) => {
  const [user, setUser] = useState([]);
  const {contributors, getContributors} = useContributor()
  
  useEffect(() => {
   getContributors(props.data.id)
   getUser()
  },[])
  console.log(props.data)
  console.log(contributors)
  
  
  const getUser = () => {
    let res = Axios.get(`/api/users/${props.data.user_id}`)
    .then((res) => {
      setUser(res.data);
      console.log("User get",res.data)
    })
    .catch((err) => {
      console.log(err);
    });
};

  
// p.id == project.id ? project : p //comparing id's
  
  
  
  return (
    <>
    {contributors.map((c) => (
      <CardWrapper>
        <CardHeader>
          <CardHeading>{user.firstname}</CardHeading>
        </CardHeader>
        <CardBody>
          {/* <CardImage src={props.data.picture} /> */}
         
        <CardComments>{props.data && <Comments project={props.data} />}</CardComments>
        <CardContributors>{c?.firstname}</CardContributors>
        </CardBody>
      </CardWrapper>
    
      
      
    ))}
    </>
  )
}
export default LandingProjectCard;