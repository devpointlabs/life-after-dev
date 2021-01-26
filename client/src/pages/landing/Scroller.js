import React, { useState } from "react";
import Axios from "axios";
import { Card, Image, Button } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroller";
import useContributor from "../../hooks/useContributor"
import LandingProjectCard from "./LandingProjectCard"


const Scroller = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [moreProjects, setMoreProjects] = useState(true);
  const {contributors, getContributors} = useContributor()
  
  const loadData = (page) => {
    Axios.get(`/api/projects/?offset=${data.length}`)
      .then((res) => {
        const newProjectList = data.concat(res.data);
        setData(newProjectList);
        
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
          loadMore={loadData}
          hasMore={moreProjects}
          loader={<div className="text-center">loading projects ...</div>}
        >
          {data.map((data) => (
           <>
           <br />
           <br />
           <LandingProjectCard key={data.id} data={data} contributors={contributors} />
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

const projectCardStyle = {
  width: "600px",
  marginLeft: "40px",
};

export default Scroller;
