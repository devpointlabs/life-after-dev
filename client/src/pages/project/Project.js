import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./style.css";
import Comments from "./Comments";
import styled from "styled-components";
import { AuthContext } from "../../providers/AuthProvider";
import RequestAction from "../../components/RequestAction";
import { useHistory } from "react-router-dom";
import {
  BackButton,
  ChangePicButton,
  CommentSection,
  CrudContainer,
  EditButtonDiv,
  GithubIcon,
  JoinButtonDiv,
  LiveIcon,
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
import { Button, ButtonContent, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import githubicon from "../../icons/google2x.png";
import liveicon from "../../icons/eye2x.png";
import { CrudIcon } from "../../styles/ProfileProjectStyle";

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
        <EditButtonDiv>
          <EditProjectModal project={project} updateProjects={updateProjects} />
        </EditButtonDiv>
      );
    }
  };

  const renderDeleteButton = () => {
    if (user?.id == owner.id) {
      return (
        <Button
          basic
          size="mini"
          onClick={() => deleteProject(project.id)}
          color="red"
        >
          Delete Project
        </Button>
      );
    }
  };

  const renderRequestAction = () => {
    if (user) {
      if (user.id !== owner.id) {
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

  const renderJoinButton = () => {
    if (user?.id !== owner.id) {
      return (
        <JoinButtonDiv>
          <RequestAction projectId={project?.id} userId={project?.user_id} />
        </JoinButtonDiv>
      );
    } else {
      return <span></span>;
    }
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
            {renderJoinButton()}
          </ProjectOwnerDiv>
          <ProjectPic src={project?.picture} />
          <ChangePicButton>
            <Button basic size="small" onClick={togglePic}>
              <Icon name="edit" />
              Edit Photo
            </Button>
          </ChangePicButton>
          <ProjectTitle>{project?.title}</ProjectTitle>
          <ProjectLinksDiv>
            <a href={`${project?.github_link}`} target="_blank">
              <GithubIcon src={githubicon} />
            </a>
            <a href={`http://${project?.live_link}`} target="_blank">
              <LiveIcon src={liveicon} />
            </a>
          </ProjectLinksDiv>
          <CrudContainer>{renderEditButton()}</CrudContainer>
          <div className="Project_Image">
            <div className="description">
              <p>{project?.description}</p>
            </div>
          </div>
          <CrudContainer>{renderDeleteButton()}</CrudContainer>
        </ProjectSection>
        <CommentSection>
          {project && <Comments project={project} />}
        </CommentSection>
      </Wrapper>
    </>
  );
};

export default Project;
