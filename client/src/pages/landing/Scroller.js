import React, { useContext, useState } from "react";
import Axios from "axios";
import { Card, Image, Button } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroller";
import useContributor from "../../hooks/useContributor";
import LandingProjectCard from "./LandingProjectCard";
import {
  SiteInfoContainer,
  SiteInfoRegisterButton,
} from "../../styles/LandingPageStyle";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Scroller = ({ currentUser }) => {
  const { user } = useContext(AuthContext);
  const [incomingProject, setIncomingProject] = useState([]);
  const [error, setError] = useState(null);
  const [moreProjects, setMoreProjects] = useState(true);
  const { contributors, getContributors } = useContributor();

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

  const renderRegister = () => {
    if (user) {
      return (
        <Link to={`/register`}>
          <SiteInfoRegisterButton>Register</SiteInfoRegisterButton>
        </Link>
      );
    } else {
      return <span></span>;
    }
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
              <LandingProjectCard
                key={incomingProject.id}
                incomingProject={incomingProject}
                contributors={contributors}
                currentUser={currentUser}
              />
            </>
          ))}
        </InfiniteScroll>
        {moreProjects ? (
          ""
        ) : (
          <div className="text-center">No More Projects</div>
        )}
      </div>
    </>
  );
};

export default Scroller;
