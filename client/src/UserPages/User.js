import axios from 'axios'
import { useState, useEffect} from "react"
import { Card } from 'semantic-ui-react'
import UserProject from './UserProject'
import "./style.css"

let imagelinks = {
  github: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png",
  linkedin: "https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Squircle-Dark.png",
  personalsite:"https://image.flaticon.com/icons/png/512/25/25284.png",
}


export default (props) => {
  const [user, setUser] = useState({});
  const [projects, setProjects] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getUser();
    getProjects();
  }, []);

  const getUser = async () => {
    try {
      let res = await axios.get(`/api/users/${props.match.params.id}`);
      //add flexible call
      console.log(res.data);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getProjects = async () => {
    try {
      let res = await axios.get(`/api/users/${props.match.params.id}/projects`);
      console.log(res.data);
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    <div className="userSection">
      <div>
        <div className="namePlate">
          <h1 className="username">{user.firstname} {user.lastname}</h1>
          <img className="userpic" src={user.image}/>
        </div>
        <h1 className="userTag">{user.tag}</h1>
      </div>
      <div className="imagelinks">
        <div className="test">
        <div>
          <h1 className="imgtext">Github: </h1>
          <a href={`http://${user.github_link}`}><img src={imagelinks.github} height="100px" width="100px"/></a>
        </div>
        <div>
          <h1 className="imgtext">LinkedIn: </h1>
          <a href={`http://${user.linkedin_link}`}><img src={imagelinks.linkedin} height="100px" width="100px"/></a>
        </div>
        <div>
          <h1 className="imgtext">Personal Site: </h1>
          <a href= {`http://${user.personal_site}`}><img src={imagelinks.personalsite} height="100px" width="100px"/></a>
        </div>
        </div>
      </div>
    </div>
    <Card.Group>
      {projects.map(p => (
        <UserProject project = {p}/>
      ))}
    </Card.Group>
    </>
  );
};
