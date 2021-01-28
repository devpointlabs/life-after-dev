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
  CardBody,
  UserPic,
  ContributorSection,
} from "../../styles/LandingPageStyle";


const LandingProjectCard = (props) => {
  const [user, setUser] = useState([]);
  const {contributors, getContributors} = useContributor()
  
  useEffect(() => {
    getContributors(props.incomingProject.id)
    getUser()
  },[])
  console.log(props.incomingProject)
  console.log("These are Contributors", contributors)
  
  
  const getUser = () => {
    let res = Axios.get(`/api/users/${props.incomingProject.user_id}`)
    .then((res) => {
      setUser(res.data);
      console.log("User get",res.data)
    })
    .catch((err) => {
      console.log(err);
    });
};

  const renderContributors = () => {
    return contributors.map((contributor) => {
      return (
        <div>{contributor.firstname} {contributor.lastname}</div>
      )
      })}

  
  
  
  return (
    <>
     <CardWrapper>
        <CardHeader>
          <UserPic src={`${user.image}`} /> 
          <CardHeading>{user.firstname}   {user.lastname}</CardHeading>
        </CardHeader>
        <CardImage src={`${props.incomingProject.picture}`} />
        <ContributorSection>Project Contributors: {renderContributors()}</ContributorSection>
          
          
         
        <CardComments>{props.incomingProject && <Comments project={props.incomingProject} />}</CardComments>
     
      </CardWrapper>
    
      
      </>
    )
  
  
}
export default LandingProjectCard;