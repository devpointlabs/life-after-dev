import React, { useState } from "react";
import Axios from "axios";

import { Card, Image, Button } from "semantic-ui-react";

import InfiniteScroll from "react-infinite-scroller";

const Scroller = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [moreProjects, setMoreProjects] = useState(true);

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
          loader={<div className="text-center">loading projects ...</div>}
        >
          {data.map((data) => (
            <Card style={projectCardStyle}>
              <Card.Content>
                <Card.Header>
                  {data.id} {data.title}
                </Card.Header>
                <Card.Description>{data.description}</Card.Description>
              </Card.Content>
            </Card>
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
