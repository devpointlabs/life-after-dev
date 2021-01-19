import Axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import useRequest from '../Hooks/useRequest';
import { AuthContext } from '../providers/AuthProvider';
import style from './style.css'

export default (props) => {
  const [comments, setComments] = useState([])
  const { user } = useContext(AuthContext)
  const { checkRequests, sendRequest} = useRequest();
  const [requestStatus, setRequestStatus] = useState("")

  useEffect(()=> {
    getComments()
    setRequestStatus(checkRequests(props.project.id, user.id))
  },[])

  const getComments = async () => {
    try {
      let res = await Axios.get(`/api/projects/${props.project.id}/comments`)
      setComments(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <Card style={projectCardStyle}>
        <Card.Content>
          <Card.Header>{props.project.id}: {props.project.title}</Card.Header>
          <Card.Description>{props.project.description}</Card.Description>
          <Image floated="left" size="small" src={`${props.project.picture}`} />
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
            <Button basic color="blue" onClick={() => sendRequest(props.project.id, user.id)}>
              {/* {(requestStatus === "none") ? "Request?" : (requestStatus === "contributor") ? "Already Joined" : "Pending request"} */}
              {requestStatus}

            </Button>
          </div>
        </Card.Content>
      </Card>
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
  width: "550px",
};

const internalCardStyle = {
  width: "150px",
};

