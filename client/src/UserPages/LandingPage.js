import {useEffect, useState, prevState } from "react";
import Axios from 'axios';

import { Card, Image, Button } from 'semantic-ui-react'
import style from './style.css'
import LandingStyle from './LandingStyle.css'
import InfiniteScroll from 'react-infinite-scroller'



const LandingPage = () => {
  
  
 
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [moreProjects, setMoreProjects] = useState(true);
 
  console.log(data);

  const loadData = (page) => {
    
      Axios.get(`/api/projects/?offset=${data.length}`)
      .then((res) => {
       
       
        const newProjectList = data.concat(res.data);
        setData(newProjectList);
        
        if(res.data.length===0) {
          setMoreProjects(false);
        } else {
          setMoreProjects(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
    
   
  }
  
  const bigTime = {
    height: "50px"
  }
  const projectCardStyle = {
    width: "550px",
  };
  
  const internalCardStyle = {
    width: "150px",
  };
  
  return (
    <>
    <div className="landing_header">
  <h1>
    Life After Dev<br />
    (search functionality here)
  </h1>
    </div>
    <div className="site_purp">
  <h1>site purpose description</h1>
    </div>
    <div className="login">
  <h1>log in logic here</h1>
    </div>
   <div className="scroll"> 
      <InfiniteScroll
    threshold={10}
    pageStart={0}
    loadMore={loadData}
    hasMore={moreProjects}
    loader={<div className="text-center">loading projects ...</div>}>
    
        {data.map(data => 
        <Card style={projectCardStyle}>
        <Card.Content>
          <Card.Header>{data.id} {data.title}</Card.Header>
          <Card.Description>{data.description}</Card.Description>
         
        </Card.Content>
      </Card>
      
      )}
      </InfiniteScroll>
  {moreProjects ? "" : <div className="text-center">no data anymore ...</div> }     
</div> 
      </>
  );
};

export default LandingPage;





   {/* <div className="scroll">
      <InfiniteScroll
    threshold={150}
    pageStart={0}
    loadMore={loadData}
    hasMore={hasMoreItems}
    loader={<div className="text-center">loading projects ...</div>}>
    
        {data.map(data => <li className="list-group-item">
        <Card style={projectCardStyle}>
        <Card.Content>
          <Card.Header>{data.title}</Card.Header>
          <Card.Description>{data.description}</Card.Description>
          <Image floated="left" size="small" src={`${data.picture}`} />
          <Card style={internalCardStyle}>
            <h4>Contributors</h4>
            <ul>
              <li>User 1</li>
              <li>User 1</li>
              <li>User 1</li>
              <li>User 1</li>
            </ul>
          </Card>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="blue">
              Request to join
            </Button>
          </div>
        </Card.Content>
      </Card>
      <br />
      </li>)}
      </InfiniteScroll>
  {hasMoreItems ? "" : <div className="text-center">no data anymore ...</div> }     */}
{/* </div> */}