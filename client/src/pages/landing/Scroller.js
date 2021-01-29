import React, { useState } from "react";
import Axios from "axios";
import { Card, Image, Button } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroller";
import useContributor from "../../hooks/useContributor"
import LandingProjectCard from "./LandingProjectCard"


const Scroller = ({ currentUser }) => {
  const [incomingProject, setIncomingProject] = useState([]);
  const [error, setError] = useState(null);
  const [moreProjects, setMoreProjects] = useState(true);
  const {contributors, getContributors} = useContributor()
  
  const loadProject = (page) => {
    Axios.get(`/api/projects/?offset=${incomingProject.length}`)
      .then((res) => {
        const newProjectList = incomingProject.concat(res.data);
        setIncomingProject(newProjectList);
        
        if (res.data.length === 0) {
          setMoreProjects(false);
        } else {
          setMoreProjects(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
     
      <div className="scroll">
        <InfiniteScroll
          threshold={10}
          pageStart={0}
          loadMore={loadProject}
          hasMore={moreProjects}
          loader={<div className="text-center">loading projects ...</div>}
        >
          {incomingProject.map((incomingProject) => (
           <>
           <br />
           <br />
           <LandingProjectCard key={incomingProject.id} incomingProject={incomingProject} contributors={contributors} currentUser={currentUser} />
           <br />
           <br />
            </>
          ))}
        </InfiniteScroll>
        {moreProjects ? (
          ""
        ) : (
          <div className="text-center">no data anymore ...</div>
        )}
      </div>
    </>
  );
};

export default Scroller;