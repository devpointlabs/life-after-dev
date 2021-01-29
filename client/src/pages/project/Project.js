import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import Comments from "./Comments";
import styled from "styled-components";
import { Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EditProjectModal from "../../components/EditProjectModal";

const Project = (props) => {
  const [project, setProject] = useState(null);
  const [owner, setOwner] = useState([]);
  const [projects, setProjects] = useState([]);

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

  return (
    <Wrapper>
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
        <EditProjectModal project={project} updateProjects={updateProjects} />
        <div className="Project_Image">
          <img className="project_image" src={project?.picture} />
          <Button color="black">Join</Button>
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
