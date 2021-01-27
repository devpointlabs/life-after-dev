import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Button, Card, Grid, Header, Icon } from "semantic-ui-react";
import UserProject from "./UserProject";
import "./style.css";
import Requests from "../../components/Requests";
import { AuthContext } from "../../providers/AuthProvider";
import ContributingProject from "./ContributingProject";
import { withRouter } from "react-router-dom";
import UserProjects from "./UserProjects";

let imagelinks = {
  github:
    "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png",
  linkedin:
    "https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Squircle-Dark.png",
  personalsite: "https://image.flaticon.com/icons/png/512/25/25284.png",
};

const User = (props) => {
  const authContext = useContext(AuthContext);
  const [loginCheck, setLoginCheck] = useState(null);
  const [showLoggedInComp, setShowLoggedInComp] = useState(false);

  const [user, setUser] = useState({});
  const [projects, setProjects] = useState([]);
  const [contributingProjects, setContributingProjects] = useState([]);

  useEffect(() => {
    getUser();
    getProjects();
    getContributingProjects();
  }, [props.match.params.id]);

  const updateProjects = (project) => {
    const updatedProjects = projects.map((p) =>
      p.id == project.id ? project : p
    );
    setProjects(updatedProjects);
  };

  const getUser = async () => {
    try {
      let res = await axios.get(`/api/users/${props.match.params.id}`);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getProjects = async () => {
    try {
      let res = await axios.get(`/api/users/${props.match.params.id}/projects`);
      console.log("user projects", res.data);
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getContributingProjects = async () => {
    try {
      let res = await axios.get(`/api/users/${props.match.params.id}/requests`);
      console.log("all requests", res);
      setContributingProjects(res.data);
    } catch (err) {
      console.log("getContributingProjects error", err);
    }
  };

  const renderLoggedIn = () =>
    authContext.user?.id == props.match.params.id && (
      <div>
        <Button
          color="teal"
          onClick={() => props.history.push(`/profile/${user.id}/settings`)}
        >
          <Icon name="pencil" />
          Edit Profile
        </Button>
      </div>
    );

  // change this to a new component
  // const renderRequests = () => (
  //   authContext.user.id == props.match.params.id && (
  //     projects.map(p =>(
  //       <Requests project={p}/>
  //     ))
  //   )
  // )

  return (
    <>
      {/* {renderRequests()} */}
      <div className="userSection">
        <Grid>
          <Grid.Row centered columns={2}>
            <div className="namePlate">
              <Grid.Column>
                <Header as="h1">
                  {user.firstname} {user.lastname}{" "}
                </Header>
                <p>{user.tag}</p>
                {renderLoggedIn()}
              </Grid.Column>
              <Grid.Column>
                <img className="userpic" src={user.image} />
              </Grid.Column>
            </div>
          </Grid.Row>
          <Grid.Row centered columns={2}>
            <Grid.Column>
              <div className="socialPlate center">
                <span className="socialText">Github</span>
                <a href={`http://${user.github_link}`} target="_blank">
                  <img
                    className="socialIcon"
                    src={imagelinks.github}
                    height="100px"
                    width="100px"
                  />
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={2}>
            <Grid.Column>
              <div className="socialPlate center">
                <span className="socialText">LinkedIn</span>
                <a href={`http://${user.linkedin_link}`} target="_blank">
                  <img
                    className="socialIcon"
                    src={imagelinks.linkedin}
                    height="100px"
                    width="100px"
                  />
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={2}>
            <Grid.Column>
              <div className="socialPlate center">
                <span className="socialText">Personal Site</span>
                <a href={`http://${user.personal_site}`} target="_blank">
                  <img
                    className="socialIcon"
                    src={imagelinks.personalsite}
                    height="100px"
                    width="100px"
                  />
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <hr className="divider"></hr>

      <UserProjects
        projects={projects}
        contributingProjects={contributingProjects}
        userId={props.match.params.id}
        updateProjects={updateProjects}
      />
    </>
  );
};

export default withRouter(User);
