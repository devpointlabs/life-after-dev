import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import Comments from "./Comments";
import styled from "styled-components";
import { AuthContext } from "../../providers/AuthProvider";
import githubicon from "../../icons/githubicon.png";
import livelink from "../../icons/livelink.png";
import { CommentSection, Wrapper } from "../../styles/ProjectShowStyle";

const Project = (props) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    getProject();
  }, []);

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
      <div className="Project_Image">
        <img className="project_image" src={project?.picture} />
        <div className="Project_Title">
          <h2> {project?.title} </h2>

          <div className="description">
            <p>{project?.description}</p>
          </div>
          <div className="links">
            <a href={`http://${project?.github_link}`} target="_blank">
              <img className="Github" src={githubicon}></img>
            </a>
            <br />
            <a href={`http://${project?.live_link}`} target="_blank">
              <img className="LiveLink" src={livelink}></img>
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

// const CommentSection = styled.div`
//   background: #1e2021;
//   width: 300px;
//   height: 100vh;
//   padding: 2rem;
//   flex-shrink: 0;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `;

export default Project;
