import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Button, Card, Grid, Header, Icon } from "semantic-ui-react";
import UserProject from "./UserProject";
import "./style.css";
import Requests from "../../components/Requests";
import { AuthContext } from "../../providers/AuthProvider";
import ContributingProject from "./ContributingProject";
import { withRouter } from "react-router-dom";

let imagelinks = {
  github:
    "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png",
  linkedin:
    "https://image.flaticon.com/icons/png/512/61/61109.png",
  personalsite: "https://image.flaticon.com/icons/png/512/25/25284.png",
};

const User = (props) => {
  const { user } = useContext(AuthContext)
  // const authContext = useContext(AuthContext);
  const [loginCheck, setLoginCheck] = useState(null);
  const [showLoggedInComp, setShowLoggedInComp] = useState(false);

  const [targetuser, setTargetUser] = useState({});
  const [projects, setProjects] = useState([]);
  const [contributingProjects, setContributingProjects] = useState([]);

  useEffect(() => {
    getTargetUser();
    getProjects();
    getContributingProjects();
  }, []);

  const getTargetUser = async () => {
    try {
      let res = await axios.get(`/api/users/${props.match.params.id}`);
      setTargetUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getProjects = async () => {
    try {
      let res = await axios.get(`/api/users/${props.match.params.id}/projects`);
      // console.log("user projects", res.data);
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getContributingProjects = async () => {
    try {
      let res = await axios.get(`/api/users/${props.match.params.id}/requests`);
      // console.log("all requests", res);
      setContributingProjects(res.data);
    } catch (err) {
      console.log("getContributingProjects error", err);
    }
  };

  const checkLoggedIn = () => 
    user.id === props.match.params.id && (
    <h1>teseee</h1>
    )
  ;

    const renderOutPage = (
      <div className ="profileShow">
      {/* {renderRequests()} */}
      <div className="userSection">
            <div className="namePlate">
                <h1>
                  {targetuser.firstname} {targetuser.lastname}{" "}
                </h1>
                <div className="dynamicProj">
                  <p style={{fontWeight: "bolder"}}>{projects.length }</p>
                  <p>Projects</p>
                </div>
                <img className="userpic" src={targetuser.image} />
                <p className="userTag">{targetuser.tag}</p>
            </div>
            <div className="socialPlate center">
              <span className="socialText">Github</span>
              <a href={`http://${targetuser.github_link}`} target="_blank">
                <img
                  className="socialIcon"
                  src={imagelinks.github}
                  height="100px"
                  width="100px"
                />
              </a>
            </div>
              <div className="socialPlate center">
                <span className="socialText">LinkedIn</span>
                <a href={`http://${targetuser.linkedin_link}`} target="_blank">
                  <img
                    className="socialIcon"
                    src={imagelinks.linkedin}
                    height="100px"
                    width="100px"
                  />
                </a>
              </div>
              <div className="socialPlate center">
                <span className="socialText">Personal Site</span>
                <a href={`http://${targetuser.personal_site}`} target="_blank">
                  <img
                    className="socialIcon"
                    src={imagelinks.personalsite}
                    height="100px"
                    width="100px"
                  />
                </a>
              </div>
      </div>
      <div className="projectsSection">
        <h2 className="center projectHeader">Projects</h2>
        <Grid>
          {projects.map((p) => (
            <UserProject key={p.id} project={p} />
          ))}
        </Grid>

        <h2 className="center projectHeader">Contributing Projects</h2>

        <Grid>
        {contributingProjects.map((c) => (
          <ContributingProject key={c.id} contProject={c} />
        ))}
        </Grid>
      </div>
    </div>
    )

    
    const renderInPage = (
      <div className ="profileShow">
      {/* {renderRequests()} */}
      <div className="projectsSectionLogged">
        <h2 className="center projectHeader">Projects</h2>
        <Grid>
          {projects.map((p) => (
            <UserProject key={p.id} project={p} />
          ))}
        </Grid>

        <h2 className="center projectHeader">Contributing Projects</h2>

        <Grid>
        {contributingProjects.map((c) => (
          <ContributingProject key={c.id} contProject={c} />
        ))}
        </Grid>
      </div>
      <div className="usersectionLogged">
            <div className="namePlate">
                <h1 style={{color: "white"}}>
                  {targetuser.firstname} {targetuser.lastname}{" "}
                </h1>
                <div className="dynamicProj">
                  <p style={{fontWeight: "bolder", fontSize: "20px", color: "white"}}>{projects.length }</p>
                  <p style = {{color: "white", marginTop: "6%"}}>Projects</p>
                </div>
                <img className="userpic" src={targetuser.image} />
                <p className="userTag" style={{color: "white"}}>{targetuser.tag}</p>
            <div>
        <Button
          color="teal"
          onClick={() => props.history.push(`/profile/${targetuser.id}/settings`)}
        >
          <Icon name="pencil" />
          Edit Profile
        </Button>
      </div>
      </div>
            {/* <div className="socialPlate center">
              <span className="socialText">Github</span>
              <a href={`http://${targetuser.github_link}`} target="_blank">
                <img
                  className="socialIcon"
                  src={imagelinks.github}
                  height="100px"
                  width="100px"
                />
              </a>
            </div>
              <div className="socialPlate center">
                <span className="socialText">LinkedIn</span>
                <a href={`http://${targetuser.linkedin_link}`} target="_blank">
                  <img
                    className="socialIcon"
                    src={imagelinks.linkedin}
                    height="100px"
                    width="100px"
                  />
                </a>
              </div>
              <div className="socialPlate center">
                <span className="socialText">Personal Site</span>
                <a href={`http://${targetuser.personal_site}`} target="_blank">
                  <img
                    className="socialIcon"
                    src={imagelinks.personalsite}
                    height="100px"
                    width="100px"
                  />
                </a>
              </div> */}
      </div>
    </div>
    )
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
    {user?.id == props.match.params.id && renderInPage}
    {user?.id !== props.match.id && renderOutPage}
    {user == null && renderOutPage}
    </>
  );
};

export default withRouter(User);
