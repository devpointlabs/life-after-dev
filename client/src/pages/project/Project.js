import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./style.css";
import Comments from "./Comments";
import { AuthContext } from "../../providers/AuthProvider";
import RequestAction from "../../components/RequestAction";
import githubicon from "../../icons/githubicon.png";
import livelink from "../../icons/livelink.png";
import {
  CommentSection,
  Wrapper,
  ProjectName,
  ProjectImage,
  Description,
  GithubImage,
  SocialLink,
  LivelinkImage,
  IconDiv,
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
        <ProjectName>{project?.title}</ProjectName>
        {renderEditButton()}
        {renderDeleteButton()}
        <ProjectImage src={project?.picture} />
        <Button color="black">Join</Button>
        <button type="button" onClick={togglePic}>
          Change Picture
        </button>
        <Description>{project?.description}</Description>
        <IconDiv>
          <SocialLink a href={`http://${project?.github_link}`} target="_blank">
            <GithubImage src={githubicon} />
          </SocialLink>
          <SocialLink a href={`http://${project?.live_link}`} targe="_blank">
            <LivelinkImage src={livelink} />
          </SocialLink>
        </IconDiv>
      </div>

      <CommentSection>
        {project && <Comments project={project} />}
      </CommentSection>
    </Wrapper>
  );
};

export default Project;
