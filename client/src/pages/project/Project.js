import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import Comments from "./Comments";
import styled from "styled-components";
// let logo ={
//   picture:
//     "https://res.cloudinary.com/lifeafterdev/image/upload/v1610151677/markus-spiske-466ENaLuhLY-unsplash_jrcxan.jpg",

const Project = (props) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    getProject();
  }, []);
  // useEffect(() => {
  //   getUser();
  // }, [data]);

  //component didupdate

  const getProject = async () => {
    try {
      let res = await axios.get(`/api/projects/${props.match.params.id}`);
      setProject(res.data);
      console.log(res);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Wrapper>
      <div className="Project_Title">
        <h1> {project?.title} </h1>
        <div className="Project_Image">
          <img className="project_image" src={project?.picture} />

          <div className="description">
            <p>{project?.description}</p>
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
              href={project?.live_link}
              onClick="console.log('The link was clicked.'); return false"
            >
              Live_Link
            </a>
          </div>
        </div>
      </div>
      <CommentSection>
        {project && <Comments project={project} />}
      </CommentSection>
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
