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
  Left,
  LandingCommentsWrap,
  ContributorImage,
  ProjectDescrip,
  ProjectTitle,
  FeedBackButton,
  SeeMoreComments,
  LandingCardIcon,
} from "../../styles/LandingPageStyle";
import useRequest from "../../hooks/useRequest";
import RequestAction from "../../components/RequestAction";
import LandingComments from './LandingComments';
import commenticon from "../../icons/Comment.png";


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
      {contributors.length > maxcontribs &&   <span> &nbsp; + {contributors.length - maxcontribs}</span>}
    </ContributorWrapper>
  )


  const renderRequestAction = () => {
    
    
    if (props.currentUser) {
      if (props.currentUser.id !== props.incomingProject.user_id) {
        return (
        <>
         <RequestAction projectId={props.incomingProject.id} userId={props.currentUser.id} page={"landing"} /> 
         <Link to={`/projects/${props.incomingProject.id}`}>
              <FeedBackButton>Leave Feedback</FeedBackButton>
              </Link>
            </>
        )
      }
      else {
        return <Link to={`/projects/${props.incomingProject.id}`}>
        <FeedBackButton>Leave Feedback</FeedBackButton>
        </Link>
      }
    } else {
      return (
        <Link to={`/register`}>
        <FeedBackButton>Join</FeedBackButton>
        </Link>
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
            </Link>
            <Link to={`/user/${user.id}`}>
              <CardHeading>{user.firstname}   {user.lastname}</CardHeading>
            </Link>
          
          </CardHeader>
          <ContributorSection> {renderContributors()}</ContributorSection>
          <Link to={`/projects/${props.incomingProject.id}`}>
          <CardImage src={`${props.incomingProject.picture}`} />
          </Link>
          <LandingCommentsWrap>
          <LandingComments projectId={props.incomingProject.id} />
          </LandingCommentsWrap>

          
          <Link to={`/projects/${props.incomingProject.id}`}>

            <SeeMoreComments><LandingCardIcon src={commenticon} /> <span>See More Comments</span></SeeMoreComments>
          </Link>
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

