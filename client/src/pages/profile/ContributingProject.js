import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Card, Grid, Image } from "semantic-ui-react";
import useRequest from "../../hooks/useRequest";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import style from "./style.css";

const ContributingProject = (props) => {
  const [comments, setComments] = useState([]);
  const { user } = useContext(AuthContext);
  const { checkRequests, sendRequest, requestStatus } = useRequest();
  const [project, setProject] = useState([]);

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
      // console.log("project data", res);
      setProject(res.data);
    } catch (err) {
      console.log("project data", err);
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
      console.log("getComments error", err);
    }
  };

  return (
    <>
      <Grid.Row columns={2}>
        <Grid.Column width={12}>
          <Card style={projectCardStyle}>
            <Card.Content>
              <Card.Header>{project.title}</Card.Header>
              <Card.Description>{project.description}</Card.Description>
              <Image floated="left" size="small" src={`${project.picture}`} />
              <Card style={internalCardStyle}>
                <h4>Contributors</h4>
                <ul>
                  <li>User 1</li>
                  <li>User 1</li>
                  <li>User 1</li>
                  <li>User 1</li>
                </ul>
              </Card>
            </Card.Content>
            <Card.Content extra>
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
      <br />
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
