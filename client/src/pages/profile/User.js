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
import {
  Aboutlist,
  AboutLoggedIn,
  AboutLoggedOut,
  DynamicProjects,
  EditButton,
  MoreLess,
  NamePlate,
  NoRequests,
  ProjectsLoggedIn,
  RequestHeader,
  RequestList,
  RequestsBox,
  UserPic,
  UserSection,
  UserSectionLogged,
  Wrapper,
} from "./UserStyles";

let imagelinks = {
  github:
    "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png",
  linkedin: "https://image.flaticon.com/icons/png/512/61/61109.png",
  personalsite: "https://image.flaticon.com/icons/png/512/25/25284.png",
};

const User = (props) => {
  const { user } = useContext(AuthContext);
  const {
    getTheseRequests,
    myRequests,
    acceptRequest,
    denyRequest,
  } = useRequest();
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
    } catch (err) {}
  };

  const getContributingProjects = async () => {
    try {
      let res = await axios.get(`/api/users/${props.match.params.id}/requests`);
      let result = res.data.filter((r) => r.contributor == true);
      setContributingProjects(result);
    } catch (err) {}
  };

  const toggleRequestView = () => {
    setToggle(!toggle);
    console.log("im being pressed");
  };

  const handleEditHover = (e) => {
    if (editHover == false) {
      e.target.style.opacity = "0.4";
      setEditHover(!editHover);
    } else {
      e.target.style.opacity = "1";
      setEditHover(!editHover);
    }
  };

  const renderOutPage = (
    <Wrapper>
      <UserSection>
        <NamePlate>
          <UserPic src={targetuser.image} />
          <h1 style={{ fontFamily: "SFDisplay" }}>
            {targetuser.firstname} {targetuser.lastname}{" "}
          </h1>
          <DynamicProjects style={{ width: "55%" }}>
            <Wrapper>
              <p style={{ fontWeight: "bolder", fontSize: "20px" }}>
                {projects.length}
                <span>&nbsp;</span>
              </p>
              <p style={{ marginTop: "6%" }}>Projects</p>
              <span>&nbsp;</span>
            </Wrapper>
            <Wrapper>
              <p style={{ fontWeight: "bolder", fontSize: "20px" }}>
                {contributingProjects.length}
                <span>&nbsp;</span>
              </p>
              <p style={{ marginTop: "6%" }}>Collabs</p>
            </Wrapper>
          </DynamicProjects>
        </NamePlate>
        <AboutLoggedOut>
          <h1
            style={{
              fontSize: "15px",
              margin: "0",
              fontFamily: "SFDisplay",
              padding: "0px 40px",
              marginBottom: 20,
            }}
          >
            ABOUT
          </h1>
          <Aboutlist>
            <li>{targetuser.tag}</li>
            <br />
            <li>LinkedIn: {targetuser.linkedin_link}</li>
            <li>Github: {targetuser.github_link}</li>
            <li>Personal: {targetuser.personal_site}</li>
          </Aboutlist>
        </AboutLoggedOut>
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
      <ProjectsLoggedIn>
        <RequestsBox>
          <RequestHeader>Pending Requests</RequestHeader>
          {myRequests.length == 0 && (
            <NoRequests>You have no requests!</NoRequests>
          )}
          {toggle === true &&
            myRequests.map((r) => (
              <RequestList>
                <span
                  style={{
                    margin: "0",
                    fontSize: "16px",
                    fontFamily: "SFDisplay",
                    fontWeight: "normal",
                  }}
                >
                  {r.firstname} {r.lastname} - {r.title}
                </span>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Button
                    style={{
                      backgroundColor: "#0959fb",
                      color: "white",
                    }}
                    onClick={() =>
                      acceptRequest(r.project_id, r.id, r.origin_user)
                    }
                  >
                    <Icon name="check" style={{ margin: 0 }} />
                  </Button>
                  <Button
                    style={{ backgroundColor: "#0959fb", color: "white" }}
                    onClick={() => denyRequest(r.project_id, r.id)}
                  >
                    <Icon name="close" style={{ margin: 0 }} />
                  </Button>
                </div>
              </RequestList>
            ))}
          {toggle == false &&
            myRequests.slice(0, 5).map((r) => (
              <RequestList>
                <span
                  style={{
                    margin: "0",
                    fontSize: "16px",
                    fontFamily: "SFDisplay",
                  }}
                >
                  {r.firstname} {r.lastname} - {r.title}
                </span>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Button
                    style={{
                      backgroundColor: "#0959fb",
                      color: "white",
                    }}
                    onClick={() =>
                      acceptRequest(r.project_id, r.id, r.origin_user)
                    }
                  >
                    <Icon name="check" style={{ margin: 0 }} />
                  </Button>
                  <Button
                    style={{ backgroundColor: "#0959fb", color: "white" }}
                    onClick={() => denyRequest(r.project_id, r.id)}
                  >
                    <Icon name="close" style={{ margin: 0 }} />
                  </Button>
                </div>
              </RequestList>
            ))}
          {myRequests.length > 5 && (
            <div style={{ display: "grid", placeItems: "center" }}>
              <MoreLess onClick={toggleRequestView}>Show More/Less</MoreLess>
            </div>
          )}
        </RequestsBox>

        <UserProjects
          projects={projects}
          contributingProjects={contributingProjects}
          userId={props.match.params.id}
          updateProjects={updateProjects}
        />
      </ProjectsLoggedIn>
      <UserSectionLogged>
        <NamePlate>
          <UserPic src={targetuser.image} />
          <h1 style={{ color: "white", fontFamily: "SFDisplay" }}>
            {targetuser.firstname} {targetuser.lastname}{" "}
          </h1>
          <DynamicProjects>
            <Wrapper>
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                {projects.length}
                <span>&nbsp;</span>
              </p>
              <p style={{ color: "white", marginTop: "6%" }}>Projects</p>
            </Wrapper>
            <Wrapper>
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                {contributingProjects.length}
                <span>&nbsp;</span>
              </p>
              <p style={{ color: "white", marginTop: "6%" }}>Collabs</p>
            </Wrapper>
          </DynamicProjects>
          <div>
            <Link
              style={{ color: "white" }}
              onMouseEnter={handleEditHover}
              onMouseLeave={handleEditHover}
              to={`/profile/${targetuser.id}/settings`}
            >
              <EditButton>
                <p
                  style={{
                    paddingTop: "7.5%",
                  }}
                >
                  Edit Profile
                </p>
              </EditButton>
            </Link>
          </div>
          <AboutLoggedIn>
            <h1 style={{ fontSize: "15px", margin: "0" }}>About</h1>
            <Aboutlist>
              <li>{targetuser.tag}</li>
              <li>LinkedIn: {targetuser.linkedin_link}</li>
              <li>Github: {targetuser.github_link}</li>
              <li>Personal: {targetuser.personal_site}</li>
            </Aboutlist>
          </AboutLoggedIn>
        </NamePlate>
      </UserSectionLogged>
    </Wrapper>
  );

  return (
    <>{user?.id == props.match.params.id ? renderInPage : renderOutPage}</>
  );
};

export default User;
