import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import {
  CardCol,
  CardsContainer,
  ModuleContainer,
  ModuleTitle,
} from "../../styles/ProfileProjectStyle";
import ContributingProject from "./ContributingProject";
import UserProject from "./UserProject";

const UserProjects = ({ projects, contributingProjects, userId }) => {
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
      const proj = <UserProject key={p.id} project={p} owner={owner} />;
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

  const renderContProjects = () => {
    return <div>Contributing projects go here</div>;
  };

  const projectsClick = () => {
    setShowProjects(true);
  };

  const collabsClick = () => {
    setShowProjects(false);
  };

  const renderProjectsToggle = () => {
    return (
      <>
        <span onClick={projectsClick}>Projects</span>
        <span onClick={collabsClick} style={{ marginLeft: 20 }}>
          Collabs
        </span>
      </>
    );
  };

  return (
    <>
      <ModuleContainer>
        <ModuleTitle>{renderProjectsToggle()}</ModuleTitle>
        {showProjects ? renderProjects() : renderContProjects()}

        <h2 className="center projectHeader">Contributing Projects</h2>

        <Grid>
          {contributingProjects.map((c) => (
            <ContributingProject key={c.id} contProject={c} />
          ))}
        </Grid>
      </ModuleContainer>
    </>
  );
};

export default UserProjects;
