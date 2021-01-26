import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Card, Image, Header, Container } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroller";
import useContributor from "../../hooks/useContributor"


const LandingProjectCard = (props) => {
  
  const {contributors, getContributors} = useContributor()
  
  useEffect(() => {
   getContributors(props.data.id)
    
  },[])
  // console.log(props.data)
  console.log(contributors)
  return (
    <>
    {contributors.map((c) => (
  // <Container >
  // <br />
  // <br />
  // Id of project owner:{props.data.user_id}
  // <Header>{props.data.title}</Header>
  // <Image 
  // float="left"
  // src={props.data.picture}/>
  // Project Description: {props.data.description}
  // <ul>Project Contributors: <li>{c.firstname}</li></ul>
  // <br />
  // <br />
  // </Container>
    
      
      c.firstname 
    ))}
    </>
  )
}
export default LandingProjectCard;