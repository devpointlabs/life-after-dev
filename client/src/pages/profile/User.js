import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Button, Card, Grid, Header, Icon } from "semantic-ui-react";
import UserProject from "./UserProject";
import "./style.css";
import { AuthContext } from "../../providers/AuthProvider";
import ContributingProject from "./ContributingProject";
import { Link, withRouter } from "react-router-dom";
import UserProjects from "./UserProjects";
import Requests from "./Requests";
import Axios from "axios";
import useRequest from "../../hooks/useRequest";
import styled from "styled-components";


let imagelinks = {
  github:
    "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png",
  linkedin: "https://image.flaticon.com/icons/png/512/61/61109.png",
  personalsite: "https://image.flaticon.com/icons/png/512/25/25284.png",
};

const User = (props) => {
  const { user } = useContext(AuthContext);
  const { getTheseRequests, myRequests, acceptRequest, denyRequest } = useRequest()
  const [targetuser, setTargetUser] = useState({});
  const [projects, setProjects] = useState([]);
  const [contributingProjects, setContributingProjects] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [editHover, setEditHover] = useState(false);

  useEffect(() => {
    getTargetUser();
    getProjects();
    getContributingProjects();
    getTheseRequests(user?.id);
  }, [props.match.params.id]);

  const updateProjects = (project) => {
    const updatedProjects = projects.map((p) =>
      p.id == project.id ? project : p
    );
    setProjects(updatedProjects);
  };

  const getTargetUser = async () => {
    try {
      let res = await axios.get(`/api/users/${props.match.params.id}`);
      setTargetUser(res.data);
    } catch (err) {
      // console.log(err);
    }
  };

  const getProjects = async () => {
    try {
      let res = await axios.get(`/api/users/${props.match.params.id}/projects`);
      // console.log("user projects", res.data);
      setProjects(res.data);
    } catch (err) {
    }
  };

  const getContributingProjects = async () => {
    try {
      let res = await axios.get(`/api/users/${props.match.params.id}/requests`);

      setContributingProjects(res.data);
    } catch (err) {
    }
  };

  const toggleRequestView = () => {
    setToggle(!toggle)
    console.log("im being pressed")
  }

  const handleEditHover = (e) => {
    if (editHover == false) {
    e.target.style.opacity = "0.4";
    setEditHover(!editHover)
    } else{  
    e.target.style.opacity = "1";
    setEditHover(!editHover)
    }
  }



  const renderOutPage = (
    <Wrapper>
      <UserSection>
        <div className="namePlate">
        <img className="userpic" src={targetuser.image} />
          <h1>
            {targetuser.firstname} {targetuser.lastname}{" "}
          </h1>
          <div className="dynamicProj">
            <p style={{ fontWeight: "bolder" }}>{projects.length}</p>
            <p>Projects</p>
          </div>
        </div>
        <div style={{paddingBottom:"10%", paddingLeft: "5%"}}>
          <h1 style={{fontSize: "15px", margin: "0"}}>
            About
          </h1>
          <ul style={{listStyle: "none", padding: "0", margin: '0', color: "#9497a5"}}>
            <li>
                {targetuser.tag}</li><li>
                LinkedIn: {targetuser.linkedin_link}</li><li>
                Github: {targetuser.github_link}</li><li>
                Personal: {targetuser.personal_site}</li>
          </ul>
        </div>
      </UserSection>
      <UserProjects
        projects={projects}
        contributingProjects={contributingProjects}
        userId={props.match.params.id}
        updateProjects={updateProjects}
      />
    </Wrapper>
  );

  const renderInPage = (
    <Wrapper>
      <div className="projectsectionlogged">
        <div style={{borderStyle: "solid", borderRadius: "5px", borderWidth: "2px", borderColor: "#9497a5", backgroundColor: "white"}}>
          {toggle === true && myRequests.map(r => (
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "10px", backgroundColor: "white"}}>
              <h1 style={{margin: "0", fontSize:"20px"}}>{r.firstname} {r.lastname} wants to join {r.title}</h1>
              <div style={{display: "flex", flexDirection: "row"}}>
                <Button style={{backgroundColor: "#0959fb", color: "white"}} onClick={()=> acceptRequest(r.project_id, r.id, r.origin_user)}> 
                  <Icon name="check"/>Accept
                </Button>
                <Button style={{backgroundColor: "#0959fb", color: "white"}} onClick={()=> denyRequest(r.project_id, r.id)}>
                <Icon name="close"/>Decline
                </Button>
              </div>
            </div>
          ))}
          {toggle == false && 
            myRequests.slice(0,5).map(r => (
              <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "10px", backgroundColor: "white"}}>
              <h1 style={{margin: "0", fontSize:"20px"}}>{r.firstname} {r.lastname} wants to join {r.title}</h1>
              <div style={{display: "flex", flexDirection: "row"}}>
                <Button style={{backgroundColor: "#0959fb", color: "white"}} onClick={()=> acceptRequest(r.project_id, r.id, r.origin_user)}> 
                  <Icon name="check"/>Accept
                </Button>
                <Button style={{backgroundColor: "#0959fb", color: "white"}} onClick={()=> denyRequest(r.project_id, r.id)}>
                  <Icon name="close"/>Decline
                </Button>
              </div>
              </div>
            ))}
            {myRequests.length >5 && <button type="button" onClick={toggleRequestView}>Show More/Less</button>}
        </div>

        <UserProjects
          projects={projects}
          contributingProjects={contributingProjects}
          userId={props.match.params.id}
          updateProjects={updateProjects}
        />
      </div>
      <div className="usersectionLogged">
        <div className="namePlate">
        <img className="userpic" src={targetuser.image} />
          <h1 style={{ color: "white" }}>
            {targetuser.firstname} {targetuser.lastname}{" "}
          </h1>
          <div className="dynamicProj">
            <p
              style={{ fontWeight: "bolder", fontSize: "20px", color: "white" }}
            >
              {projects.length}
            </p>
            <p style={{ color: "white", marginTop: "6%" }}>Projects</p>
          </div>
          <div>
            <Link
              style={{color: "white", 
              }}
              onMouseEnter={handleEditHover}
              onMouseLeave={handleEditHover}
              to={`/profile/${targetuser.id}/settings`}
              >
                <div style={{
                  backgroundColor: "#6fd76a", 
                  height: "50px", 
                  width: "200px", 
                  borderRadius: "9px",
                  textAlign: "center",
                  }}
                  >
                  <p style={{
                  paddingTop: "7.5%",
                  }}>
                      Edit Profile
                  </p>
                </div>
              </Link>
          </div>
          <div style={{paddingBottom:"10%", paddingLeft: "5%", paddingTop: "10%"}}>
            <h1 style={{fontSize: "15px", margin: "0"}}>
              About
            </h1>
            <ul style={{listStyle: "none", padding: "0", margin: '0', color: "#9497a5"}}>
              <li>
                  {targetuser.tag}</li><li>
                  LinkedIn: {targetuser.linkedin_link}</li><li>
                  Github: {targetuser.github_link}</li><li>
                  Personal: {targetuser.personal_site}</li>
            </ul>
        </div>
        </div>
      </div>
    </Wrapper>
  );

  return (
    <>
      {user?.id == props.match.params.id ? renderInPage : renderOutPage}
      {/* {user?.id !== props.match.params.id && renderOutPage} */}
      {user == null && renderOutPage}
    </>
  );
};

export default User;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserSection = styled.div`
background-color: white;
width: 100%;
height: 100%;
border-radius: 5%;
position: -webkit-sticky;
position: sticky;
margin-top: 5%;
margin-right: 7%;
top: 0;
`

