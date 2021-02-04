import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./style.css";
import Comments from "./Comments";
import { AuthContext } from "../../providers/AuthProvider";
import RequestAction from "../../components/RequestAction";
import { useHistory } from "react-router-dom";
import {
  BackButton,
  ChangePicButton,
  CommentSection,
  ContName,
  ContPic,
  ContributorDiv,
  ContributorsDiv,
  ContributorTitle,
  CrudContainer,
  DescriptionDiv,
  EditButtonDiv,
  GithubIcon,
  JoinButtonDiv,
  LiveIcon,
  LowerBodyDiv,
  ProjectLinksDiv,
  ProjectOwnerDiv,
  ProjectOwnerName,
  ProjectOwnerPic,
  ProjectPic,
  ProjectSection,
  ProjectTitle,
  RealBackButton,
  Wrapper,
} from "../../styles/ProjectShowStyle";
import ProjectPicModal from "./ProjectPicModal";
import EditProjectModal from "../../components/EditProjectModal";
import { Button, ButtonContent, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import githubicon from "../../icons/github32px.png";
import liveicon from "../../icons/language24px.svg";
import { CrudIcon } from "../../styles/ProfileProjectStyle";
import DeleteProjectModal from "./DeleteProjectModal";
import useContributor from "../../hooks/useContributor";
import {
  ContributorImage,
  ContributorWrapper,
} from "../../styles/LandingPageStyle";

const Project = (props) => {
  const [project, setProject] = useState(null);
  const [owner, setOwner] = useState([]);
  const { user } = useContext(AuthContext);
  const [seen, setSeen] = useState(false);
  const { contributors, getContributors } = useContributor();
  let history = useHistory();

  useEffect(() => {
    getProjectData();
  }, []);

  useEffect(() => {
    if (project) {
      getContributors(project.id);
    }
  }, [project]);

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
        <DeleteProjectModal deleteProject={deleteProject} project={project} />
      );
    }
  };

  const renderEditPhotoButton = () => {
    if (user?.id == owner.id) {
      return (
        <ChangePicButton>
          <Button basic size="small" onClick={togglePic}>
            <Icon name="edit" />
            Edit Photo
          </Button>
        </ChangePicButton>
      );
    }
  };

  const renderContributors = () => {
    return contributors.map((c) => {
      return (
        <ContributorsDiv>
          <Link to={`/user/${c.user_id}`}>
            <ContPic src={c.image} />
          </Link>
          <Link to={`/user/${c.user_id}`}>
            <ContName>
              {c.firstname} {c.lastname}
            </ContName>
          </Link>
        </ContributorsDiv>
      );
    });
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
      {seen ? (
        <ProjectPicModal toggle={togglePic} user={user} project={project} />
      ) : null}
        <ProjectSection>
          <BackButton>
            <RealBackButton onClick={() => history.goBack()}>
              <Icon name="angle left" />
              Back
            </RealBackButton>
          </BackButton>
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
          {renderEditPhotoButton()}
          <ProjectTitle>{project?.title}</ProjectTitle>
          <ProjectLinksDiv>
            <a href={`${project?.github_link}`} target="_blank">
              <GithubIcon src={githubicon} />
            </a>
            <a href={`${project?.live_link}`} target="_blank">
              <LiveIcon src={liveicon} />
            </a>
            <div style={{ marginLeft: 30 }}>{renderEditButton()}</div>
          </ProjectLinksDiv>
          <LowerBodyDiv>
            <DescriptionDiv>
              {project?.description}
              <div style={{ marginTop: 60 }}>{renderDeleteButton()}</div>
            </DescriptionDiv>
            <ContributorDiv>
              <ContributorTitle>Contributors</ContributorTitle>
              {renderContributors()}
            </ContributorDiv>
          </LowerBodyDiv>
        </ProjectSection>
        <CommentSection>
          {project && <Comments project={project} />}
        </CommentSection>
      </Wrapper>
    </>
  );
};

export default Project;
