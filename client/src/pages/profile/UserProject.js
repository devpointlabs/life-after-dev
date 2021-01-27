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
} from "../../styles/ProfileProjectStyle";

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
    //currently not rendered anywhere
    try {
      let res = await Axios.get(`/api/projects/${props.project.id}/comments`);
      console.log("get comments", res.data);
      setComments(res.data);
    } catch (err) {
      console.log(err);
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
            <p>Edit</p>
          </CrudIcon>
        </CardHeader>
        <CardDiv>
          <Link to={`/project/${props.project.id}`}>
            <ProjectPic src={`${props.project.picture}`} />
          </Link>
        </CardDiv>
        <CardDiv>
          <Link to={`/project/${props.project.id}`}>{props.project.title}</Link>
        </CardDiv>

        <Card.Description>{props.project.description}</Card.Description>
        <p>{comments.length} comments</p>
        <div className="ui two buttons">
          {requestStatus === "none" && (
            <Button
              basic
              color="blue"
              onClick={() => sendRequest(props.project.id, user.id)}
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
              to={`/project/${props.project.id}`}
            >
              Already Contributing - go to Project Page
            </Button>
          )}
        </div>
      </CardContainer>

      {/* <Grid.Row columns={2}>
        <Grid.Column width={12}>
          <Card style={projectCardStyle}>
            <Card.Content>
              <Image src={`${props.owner.image}`} floated="left" size="small" />
              <h2>
                {props.owner.firstname} {props.owner.lastname}
              </h2>
              <Image
                floated="left"
                size="small"
                src={`${props.project.picture}`}
              />
              <Link to={`/project/${props.project.id}`}>
                <Card.Header>{props.project.title}</Card.Header>
              </Link>
              <Card.Description>{props.project.description}</Card.Description>
              <p>{comments.length} comments</p>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                {requestStatus === "none" && (
                  <Button
                    basic
                    color="blue"
                    onClick={() => sendRequest(props.project.id, user.id)}
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
                    to={`/project/${props.project.id}`}
                  >
                    Already Contributing - go to Project Page
                  </Button>
                )}
              </div>
            </Card.Content>
          </Card>
          <br />
        </Grid.Column>
        <Grid.Column width={4}>
          <div>
            <Button style={rightColStyle} basic color="violet">
              Edit Project
            </Button>
          </div>
          <div>
            <Button style={rightColStyle} basic color="red">
              Delete Project
            </Button>
          </div>
        </Grid.Column>
      </Grid.Row>
      <br /> */}
    </>

    // {/* <Card>
    //   <Card.Content>
    //     <Card.Header>{props.project.title}</Card.Header>
    //     <Card.Meta>{props.project.picture}</Card.Meta>
    //     <Card.Description>{props.project.description}</Card.Description>
    //   </Card.Content>
    //   <Card.Content extra>
    //     <Card.Description>{props.project.github_link}</Card.Description>
    //   </Card.Content>
    // </Card> */}
  );
};

export default UserProject;
