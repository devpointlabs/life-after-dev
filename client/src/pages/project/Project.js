import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import Comments from "./Comments";
import styled from "styled-components";
import { AuthContext } from "../../providers/AuthProvider";
import githubicon from "../../icons/githubicon.png";
import livelink from "../../icons/livelink.png";
import { CommentSection, Wrapper } from "../../styles/ProjectShowStyle";
import ProjectPicModal from "./ProjectPicModal";

const Project = (props) => {
  const [project, setProject] = useState(null);
  const [owner, setOwner] = useState([]);
  const [projects, setProjects] = useState([]);
  const { user } = useContext(AuthContext);
  const [seen, setSeen] = useState(false);

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

  const togglePic = () => {
    setSeen(!seen);
  };

  return (
    <Wrapper>
      {seen ? (
        <ProjectPicModal toggle={togglePic} user={user} project={project} />
      ) : null}
      <div className="Project_Title">
        <Link to={`/user/${owner.id}`}>
          <h2>
            {owner.firstname} {owner.lastname}
          </h2>
        </Link>
        <Link to={`/user/${owner.id}`}>
          <Image src={owner.image} avatar />
        </Link>
        <h2> {project?.title} </h2>
        {renderEditButton()}
        {renderDeleteButton()}
        <div className="Project_Image">
          <img className="project_image" src={project?.picture} />
          <Button color="black">Join</Button>
          <button type="button" onClick={togglePic}>
            Change Picture
          </button>
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
