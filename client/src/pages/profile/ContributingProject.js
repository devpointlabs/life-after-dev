import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Card, Grid, Image } from "semantic-ui-react";
import useRequest from "../../hooks/useRequest";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import style from "./style.css";
import {
  CardContainer,
  CardDiv,
  CrudIcon,
  ProjectPic,
  UserName,
  UserPic,
  CardHeader,
  ProjectTitle,
  CardIcon,
} from "../../styles/ProfileProjectStyle";
// import trashicon from "../../icons/bin.png";
import commenticon from "../../icons/Comment.png";

const ContributingProject = ({ id, project_id }) => {
  const [comments, setComments] = useState([]);
  const { user } = useContext(AuthContext);
  const { checkRequests, sendRequest, requestStatus } = useRequest();
  const [project, setProject] = useState([]);
  const [otherOwner, setOtherOwner] = useState([]);

  useEffect(() => {
    getComments();
    checkRequests(project_id, user?.id);
    getProjectData();
  }, []);

  const getProjectData = async () => {
    try {
      let res = await Axios.get(`/api/projects/${project_id}`);
      // console.log("project data", res.data);
      setProject(res.data);
      let ownerRes = await Axios.get(`/api/users/${res.data.user_id}`);
      setOtherOwner(ownerRes.data);
    } catch (err) {
      // console.log("project data", err);
    }
  };

  const getComments = async () => {
    //currently not rendered anywhere
    try {
      let res = await Axios.get(`/api/projects/${project_id}/comments`);
      setComments(res.data);
    } catch (err) {
      // console.log("getComments error", err);
    }
  };

  return (
    <>
      <CardContainer>
        <CardHeader>
          <Link to={`/user/${otherOwner.id}`}>
            <UserPic src={`${otherOwner.image}`} />
          </Link>
          <Link to={`/user/${otherOwner.id}`}>
            <UserName>
              {otherOwner.firstname} {otherOwner.lastname}
            </UserName>
          </Link>
        </CardHeader>
        <CardDiv>
          <Link to={`/projects/${project.id}`}>
            <ProjectPic src={`${project.picture}`} />
          </Link>
        </CardDiv>
        <CardDiv>
          <Link to={`/projects/${project.id}`}>
            <ProjectTitle>{project.title}</ProjectTitle>
          </Link>
        </CardDiv>

        <CardDiv style={{ color: "#8e8e8e", fontWeight: 900 }}>
          {project.description}
        </CardDiv>
        <CardDiv style={{ marginTop: 15 }}>
          <CardIcon src={commenticon} />
          <span style={{ marginLeft: 5, fontWeight: 900 }}>
            {comments.length}
          </span>
        </CardDiv>
        <div className="ui two buttons">
          {requestStatus === "none" && (
            <Button basic color="blue" onClick={() => sendRequest(id, user.id)}>
              {requestStatus}
            </Button>
          )}
          {requestStatus === "pending" && (
            <Button disabled>Request Pending</Button>
          )}
          {requestStatus === "contributor" && (
            <Button basic color="green" as={Link} to={`/project/${id}`}>
              Already Contributing - go to Project Page
            </Button>
          )}
        </div>
      </CardContainer>
    </>
  );
};

export default ContributingProject;

const projectCardStyle = {
  width: "600px",
  marginLeft: "40px",
};

const internalCardStyle = {
  width: "150px",
};

const rightColStyle = {
  marginRight: "40px",
};
