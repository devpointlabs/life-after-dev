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
import trashicon from "../../icons/Bin.png";
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

  return (
    <>
      <CardContainer>
        <CardHeader>
          <UserPic src={`${props.owner.image}`} />
          <UserName>
            {props.owner.firstname} {props.owner.lastname}
          </UserName>
          <CrudIcon>
            <EditProjectModal
              project={props.project}
              updateProjects={props.updateProjects}
            />
          </CrudIcon>
        </CardHeader>
        <CardDiv>
          <Link to={`/project/${props.project.id}`}>
            <ProjectPic src={`${props.project.picture}`} />
          </Link>
        </CardDiv>
        <CardDiv>
          <Link to={`/project/${props.project.id}`}>
            <ProjectTitle>{props.project.title}</ProjectTitle>
          </Link>
        </CardDiv>
        <CardDiv>{props.project.description}</CardDiv>
        <CardDiv>
          <CardIcon src={commenticon} />
          <span style={{ marginLeft: 5, fontWeight: 900 }}>
            {comments.length}
          </span>
        </CardDiv>
      </CardContainer>
    </>
  );
};

export default UserProject;
