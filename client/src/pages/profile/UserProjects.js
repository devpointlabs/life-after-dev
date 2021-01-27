import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import {
  ActiveDotOne,
  ActiveDotTwo,
  CardCol,
  CardsContainer,
  ModuleContainer,
  ModuleTitle,
} from "../../styles/ProfileProjectStyle";
import ContributingProject from "./ContributingProject";
import UserProject from "./UserProject";

const UserProjects = ({
  projects,
  contributingProjects,
  userId,
  updateProjects,
}) => {
  const [owner, setOwner] = useState([]);
  const [showProjects, setShowProjects] = useState(true);

  const gridCols = [[], []];

  useEffect(() => {
    getOwner();
  }, []);

  const getOwner = async () => {
    try {
      let res = await Axios.get(`/api/users/${userId}`);
      console.log("get YOU owner", res.data);
      setOwner(res.data);
    } catch (err) {
      console.log("get owners", err);
    }
  };

  const renderProjects = () => {
    projects.forEach((p, i) => {
      const proj = (
        <UserProject
          key={p.id}
          project={p}
          owner={owner}
          updateProjects={updateProjects}
        />
      );
      const colNumber = i % 2;
      gridCols[colNumber].push(proj);
    });
    return (
      <CardsContainer>
        <CardCol>{gridCols[0]}</CardCol>
        <CardCol>{gridCols[1]}</CardCol>
      </CardsContainer>
    );
  };

  // {contributingProjects.map((c) => (
  //   <ContributingProject key={c.id} contProject={c} />
  // ))}

  const renderContProjects = () => {
    contributingProjects.forEach((c, i) => {
      const contProj = <ContributingProject key={c.id} contProject={c} />;
      const colNumber = i % 2;
      gridCols[colNumber].push(contProj);
    });
    return (
      <CardsContainer>
        <CardCol>{gridCols[0]}</CardCol>
        <CardCol>{gridCols[1]}</CardCol>
      </CardsContainer>
    );
  };

  const projectsClick = () => {
    setShowProjects(true);
  };

  const collabsClick = () => {
    setShowProjects(false);
  };

  const renderProjectsActiveToggle = () => {
    return (
      <>
        <span style={activeStyle} onClick={projectsClick}>
          Projects
        </span>
        <span style={inactiveStyle} onClick={collabsClick}>
          Collabs
        </span>
        <br></br>
        <ActiveDotOne />
      </>
    );
  };

  const renderCollabsActiveToggle = () => {
    return (
      <>
        <span style={inactiveStyle} onClick={projectsClick}>
          Projects
        </span>
        <span style={activeStyle} onClick={collabsClick}>
          Collabs
        </span>
        <br></br>
        <ActiveDotTwo />
      </>
    );
  };

  return (
    <>
      <ModuleContainer>
        <ModuleTitle>
          {showProjects
            ? renderProjectsActiveToggle()
            : renderCollabsActiveToggle()}
        </ModuleTitle>
        {showProjects ? renderProjects() : renderContProjects()}
      </ModuleContainer>
    </>
  );
};

const activeStyle = {
  color: "#000000",
  marginLeft: 20,
};
const inactiveStyle = {
  color: "#cbcbcb",
  marginLeft: 20,
};

export default UserProjects;
