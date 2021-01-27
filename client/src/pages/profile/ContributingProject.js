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
} from "../../styles/ProfileProjectStyle";

const ContributingProject = (props) => {
  const [comments, setComments] = useState([]);
  const { user } = useContext(AuthContext);
  const { checkRequests, sendRequest, requestStatus } = useRequest();
  const [project, setProject] = useState([]);
  const [otherOwner, setOtherOwner] = useState([]);

  useEffect(() => {
    getComments();
    checkRequests(props.contProject.project_id, user?.id);
    getProjectData();
  }, []);

  const getProjectData = async () => {
    try {
      let res = await Axios.get(
        `/api/projects/${props.contProject.project_id}`
      );
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
      let res = await Axios.get(
        `/api/projects/${props.contProject.project_id}/comments`
      );
      setComments(res.data);
    } catch (err) {
      // console.log("getComments error", err);
    }
  };

  return (
    <>
      <CardContainer>
        <CardHeader>
          <UserPic src={`${otherOwner.image}`} />
          <UserName>
            {otherOwner.firstname} {otherOwner.lastname}
          </UserName>
        </CardHeader>
        <CardDiv>
          <Link to={`/project/${project.id}`}>
            <ProjectPic src={`${project.picture}`} />
          </Link>
        </CardDiv>
        <CardDiv>
          <Link to={`/project/${project.id}`}>{project.title}</Link>
        </CardDiv>

        <Card.Description>{project.description}</Card.Description>
        <p>{comments.length} comments</p>
        <div className="ui two buttons">
          {requestStatus === "none" && (
            <Button
              basic
              color="blue"
              onClick={() => sendRequest(props.contProject.id, user.id)}
            >
              {requestStatus}
            </Button>
          )}
          {requestStatus === "pending" && (
            <Button disabled>Request Pending</Button>
          )}
          {requestStatus === "contributor" && (
            <Button
              basic
              color="green"
              as={Link}
              to={`/project/${props.contProject.id}`}
            >
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
