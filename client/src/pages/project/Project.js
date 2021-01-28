import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import Comments from "./Comments";
import styled from "styled-components";
// let logo ={
//   picture:
//     "https://res.cloudinary.com/lifeafterdev/image/upload/v1610151677/markus-spiske-466ENaLuhLY-unsplash_jrcxan.jpg",

const Project = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);
  // useEffect(() => {
  //   getUser();
  // }, [data]);

  //component didupdate

  const getData = async () => {
    try {
      let res = await axios.get(`/api/projects/${props.match.params.id}`);
      setData(res.data);
      console.log(res);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Wrapper>
      <div className="Project_Title">
        <h1> {data?.title} </h1>
        <div className="Project_Image">
          <img className="project_image" src={data?.picture} />

          <div className="description">
            <p>{data?.description}</p>
          </div>
          <div className="links">
            <a
              href={"https://github.com/devpointlabs/life-after-dev"}
              onClick="console.log('The link was clicked.'); return false"
            >
              Github
            </a>
            <br />
            <a
              href={data?.live_link}
              onClick="console.log('The link was clicked.'); return false"
            >
              Live_Link
            </a>
          </div>
        </div>
      </div>
      <CommentSection>{data && <Comments project={data} />}</CommentSection>
    </Wrapper>
  );
};

const CommentSection = styled.div`
  background: #1e2021;
  width: 300px;
  height: 100vh;
  padding: 2rem;
  flex-shrink: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default Project;
