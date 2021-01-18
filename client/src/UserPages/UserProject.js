import Axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button, Image, Grid } from "semantic-ui-react";
import style from "./style.css";

export default (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      let res = await Axios.get(`/api/projects/${props.project.id}/comments`);
      console.log(res.data);
      setComments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Grid.Row columns={2}>
        <Grid.Column width={12}>
          <Card style={projectCardStyle}>
            <Card.Content>
              <Card.Header>{props.project.title}</Card.Header>
              <Card.Description>{props.project.description}</Card.Description>
              <Image
                floated="left"
                size="small"
                src={`${props.project.picture}`}
              />
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
                <Button basic color="blue">
                  Request to join
                </Button>
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
