import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Card, Grid, Image } from "semantic-ui-react";
import useRequest from "../../hooks/useRequest";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import style from "./style.css";
import {
  CardCol,
  CardContainer,
  CardsContainer,
  UserPic,
  CardHeader,
  UserName,
  CrudIcon,
  ProjectPic,
  CardDiv,
  ProjectTitle,
  CardIcon,
} from "../../styles/ProfileProjectStyle";
import ProjectFormModal from "../../components/ProjectFormModal";
import EditProjectModal from "../../components/EditProjectModal";
import commenticon from "../../icons/Comment.png";

const UserProject = (props) => {
  const [comments, setComments] = useState([]);
  const { user } = useContext(AuthContext);
  const { checkRequests, sendRequest, requestStatus } = useRequest();
  const { toggle, setToggle } = useState(false);

  useEffect(() => {
    getComments();
    checkRequests(props.project.id, user?.id);
  }, []);

  const getComments = async () => {
    try {
      let res = await Axios.get(`/api/projects/${props.project.id}/comments`);
      // console.log("get comments", res.data);
      setComments(res.data);
    } catch (err) {
      // console.log(err);
    }
  };

  const returnShortDescription = () => {
    if (props.project.description?.length > 100) {
      return props.project.description.substring(0, 100) + "...";
    } else {
      return props.project?.description;
    }
  };

  const renderEditButton = () => {
    if (user.id == props.project.user_id) {
      return (
        <EditProjectModal
          project={props.project}
          updateProjects={props.updateProjects}
        />
      );
    }
  };

  return (
    <>
      <CardContainer>
        <CardHeader>
          <UserPic src={`${props.owner.image}`} />
          <UserName>
            {props.owner.firstname} {props.owner.lastname}
          </UserName>
          <CrudIcon>
            {/* <EditProjectModal
              project={props.project}
              updateProjects={props.updateProjects}
            /> */}
            {renderEditButton()}
          </CrudIcon>
        </CardHeader>
        <CardDiv>
          <Link to={`/projects/${props.project.id}`}>
            <ProjectPic src={`${props.project.picture}`} />
          </Link>
        </CardDiv>
        <CardDiv>
          <Link to={`/projects/${props.project.id}`}>
            <ProjectTitle>{props.project.title}</ProjectTitle>
          </Link>
        </CardDiv>
        <CardDiv style={{ color: "#8e8e8e", fontWeight: 900 }}>
          {returnShortDescription()}
        </CardDiv>
        <Link to={`/projects/${props.project.id}`}>
          <CardDiv style={{ marginTop: 15 }}>
            <CardIcon src={commenticon} />
            <span
              style={{
                marginLeft: 5,
                fontWeight: 900,
                color: "black",
              }}
            >
              {comments.length}
            </span>
          </CardDiv>
        </Link>
      </CardContainer>
    </>
  );
};

export default UserProject;
