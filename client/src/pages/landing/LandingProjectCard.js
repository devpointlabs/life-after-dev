import React, { useEffect, useState, useContext } from "react";
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
  CardComments,
  UserPic,
  ContributorSection,
  ProjectName,
  JoinButton,
  CommentInputStyle
} from "../../styles/LandingPageStyle";
import useRequest from "../../hooks/useRequest";
import RequestAction from "../../components/RequestAction";
import CommentInput from "../project/CommentInput";



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

  const renderContributors = () => {
    return contributors.map((contributor) => {
      return (
        <div>{contributor.firstname} {contributor.lastname}</div>
      )
    })
  };


  // const registerRedirect = () => {
  //   let path = `/register`;
  //   let history = useHistory()
  //   history.push(path)

  // }

  const renderRequestAction = () => {
    if (props.currentUser) {
      if (props.currentUser.id !== props.incomingProject.user_id) {
        return (<RequestAction projectId={props.incomingProject.id} userId={props.currentUser.id}/>)
      }
      else {
        return (<span></span>)
      }
    } else {
      return (
        <JoinButton href="http://localhost:3000/register">
          <button>Join</button></JoinButton>
       
      )
    }
    
}
 

  
  
  
  return (
    <>
     <CardWrapper>
        <CardHeader>
        <Link to={`/user/${user.id}`}>
            <UserPic src={`${user.image}`} />
          <CardHeading>{user.firstname}   {user.lastname}</CardHeading>
          </Link>
        </CardHeader>
        <Link to={`/projects/${props.incomingProject.id}`}>
        <ProjectName>{ `${props.incomingProject.title}`}</ProjectName>
        <CardImage src={`${props.incomingProject.picture}`} />
        </Link>
        <ContributorSection>Project Contributors: {renderContributors()}</ContributorSection>
        {renderRequestAction()} 
          
        <CommentInputStyle> 
        <CommentInput />
        </CommentInputStyle>  
         
         {props.incomingProject && <Comments project={props.incomingProject} />}
   
      </CardWrapper>
    
      
      </>
    )
  
  
}
export default LandingProjectCard;

// if own user make sure button is not there