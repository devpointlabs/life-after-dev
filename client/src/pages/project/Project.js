import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./style.css";
import Comments from "./Comments";
import styled from "styled-components";
import { AuthContext } from "../../providers/AuthProvider";
import RequestAction from "../../components/RequestAction";
import githubicon from "../../icons/githubicon.png";
import livelink from "../../icons/livelink.png";
import { useHistory } from "react-router-dom";
import {
  BackButton,
  CommentSection,
  JoinButtonDiv,
  ProjectLinksDiv,
  ProjectOwnerDiv,
  ProjectOwnerName,
  ProjectOwnerPic,
  ProjectPic,
  ProjectSection,
  ProjectTitle,
  Wrapper,
} from "../../styles/ProjectShowStyle";
import ProjectPicModal from "./ProjectPicModal";
import EditProjectModal from "../../components/EditProjectModal";
import { Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Project = (props) => {
  const [project, setProject] = useState(null);
  const [owner, setOwner] = useState([]);
  const [projects, setProjects] = useState([]);
  const { user } = useContext(AuthContext);
  const [seen, setSeen] = useState(false);
  let history = useHistory();

  useEffect(() => {
    getProjectData();
  }, []);

  const getProjectData = async () => {
    try {
      let res = await axios.get(`/api/projects/${props.match.params.id}`);
      setProject(res.data);
      console.log("project", res);
      let ownerRes = await axios.get(`/api/users/${res.data.user_id}`);
      setOwner(ownerRes.data);
      console.log("owner", ownerRes);
    } catch (err) {
      console.log(err);
    }
  };

  const updateProjects = (project) => {
    const updatedProject = project;
    setProject(updatedProject);
  };

  const deleteProject = (id) => {
    axios
      .delete(`/api/users/${owner.id}/projects/${id}`)
      .then((res) => {
        console.log("project deleted", res);
        props.history.push(`/user/${owner.id}`);
      })
      .catch((err) => {
        console.log("delete project error", err);
      });
  };

  const renderEditButton = () => {
    if (user?.id == owner.id) {
      return (
        <EditProjectModal project={project} updateProjects={updateProjects} />
      );
    }
  };

  const renderDeleteButton = () => {
    if (user?.id == owner.id) {
      return (
        <Button onClick={() => deleteProject(project.id)} color="red">
          Delete
        </Button>
      );
    }
  };

  const renderRequestAction = () => {
    if (user) {
      if (user.id !== project?.user_id) {
        return <RequestAction projectId={project?.id} userId={user.id} />;
      } else {
        return <span></span>;
      }
    } else {
      return (
        <a href="http://localhost:3000/register">
          <button>Join</button>
        </a>
      );
    }
  };

  const togglePic = () => {
    setSeen(!seen);
  };

  return (
    <>
      <Wrapper>
        <ProjectSection>
          <BackButton>
            <Button onClick={() => history.goBack()}>Back</Button>
          </BackButton>
          {seen ? (
            <ProjectPicModal toggle={togglePic} user={user} project={project} />
          ) : null}
          <ProjectOwnerDiv>
            <Link to={`/user/${owner.id}`}>
              <ProjectOwnerPic src={owner.image} />
            </Link>
            <Link to={`/user/${owner.id}`}>
              <ProjectOwnerName>
                {owner.firstname} {owner.lastname}
              </ProjectOwnerName>
            </Link>
            <JoinButtonDiv>
              <Button color="black">Join</Button>
            </JoinButtonDiv>
          </ProjectOwnerDiv>
          <ProjectPic src={project?.picture} />
          <ProjectTitle>{project?.title}</ProjectTitle>
          <ProjectLinksDiv>
            <div className="links">
              <a href={`http://${project?.github_link}`} target="_blank">
                <img className="Github" src={githubicon} />
              </a>
              <br />
              <a href={`http://${project?.live_link}`} target="_blank">
                <img className="LiveLink" src={livelink} />
              </a>
            </div>
          </ProjectLinksDiv>
          {renderEditButton()}
          {renderDeleteButton()}
          <div className="Project_Image">
            <button type="button" onClick={togglePic}>
              Change Picture
            </button>
            <div className="description">
              <p>{project?.description}</p>
            </div>
          </div>
        </ProjectSection>
        <CommentSection>
          {project && <Comments project={project} />}
        </CommentSection>
      </Wrapper>
    </>
  );
};

export default Project;
