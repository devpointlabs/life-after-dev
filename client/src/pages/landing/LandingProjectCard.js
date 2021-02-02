import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Axios from "axios";
import { Card, Image, Header, Container } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroller";
import Comments from "../project/Comments"
import useContributor from "../../hooks/useContributor"
import { Link } from "react-router-dom"
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardImage,
  Right,
  UserPic,
  ContributorSection,
  ContributorWrapper,
  JoinButton,
  Left,
  LandingCommentsWrap,
  ContributorImage,
  ProjectDescrip,
  ProjectTitle,
} from "../../styles/LandingPageStyle";
import useRequest from "../../hooks/useRequest";
import RequestAction from "../../components/RequestAction";
import CommentInput from "../project/CommentInput";
import LandingComments from './LandingComments';


const LandingProjectCard = (props) => { 
  const [user, setUser] = useState([]);
  const {contributors, getContributors} = useContributor()
  const { sendRequest, checkRequests, requestStatus } = useRequest()

  
  
  useEffect(() => {
    getContributors(props.incomingProject.id)
    getUser()
  },[])
  
  
  
  const getUser = () => {
    let res = Axios.get(`/api/users/${props.incomingProject.user_id}`)
    .then((res) => {
      setUser(res.data);
      
    })
    .catch((err) => {
      console.log(err);
    });
};

  const maxcontribs = 3

  const renderContributors = () => (
    <ContributorWrapper>
      {contributors.map((c, i) => (
        i < maxcontribs && <ContributorImage image={c.image} />
      ))}
      {contributors.length > maxcontribs && ` +  ${contributors.length - maxcontribs}`}
    </ContributorWrapper>
  )


  // const registerRedirect = () => {
  //   let path = `/register`;
  //   let history = useHistory()
  //   history.push(path)

  // }

  const renderRequestAction = () => {
    if (props.currentUser) {
      if (props.currentUser.id !== props.incomingProject.user_id) {
        return <JoinButton> <RequestAction projectId={props.incomingProject.id} userId={props.currentUser.id}/> </JoinButton>
      }
      else {
        return " "
      }
    } else {
      return (
        <div href="http://localhost:3000/register">
          Join</div>
       
      )
    }
    
}
 
  return (
    <>
     <CardWrapper>
     <Left>
          <CardHeader>
            <Link to={`/user/${user.id}`}>
            
              <UserPic src={`${user.image}`} />
              <CardHeading>{user.firstname}   {user.lastname}</CardHeading>
            </Link>
          
          </CardHeader>
          <ContributorSection> {renderContributors()}</ContributorSection>
          <CardImage src={`${props.incomingProject.picture}`} />
          <LandingCommentsWrap>
          <LandingComments projectId={props.incomingProject.id} />
          </LandingCommentsWrap>
        </Left>
        <Right>
          <ProjectTitle> {props.incomingProject.title}</ProjectTitle>
          <ProjectDescrip>{props.incomingProject.description}</ProjectDescrip>
        {renderRequestAction()} 
        </Right>
        </CardWrapper>
    
      </>
    )
  
  
}


export default LandingProjectCard;

