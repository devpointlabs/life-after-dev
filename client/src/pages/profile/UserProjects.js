import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import ContributingProject from "./ContributingProject";
import UserProject from "./UserProject";

const UserProjects = ({ projects, contributingProjects, userId }) => {
  const [owner, setOwner] = useState([]);

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

  return (
    <>
      <Grid>
        {projects.map((p) => (
          <UserProject key={p.id} project={p} owner={owner} />
        ))}
      </Grid>

      <h2 className="center projectHeader">Contributing Projects</h2>

      <Grid>
        {contributingProjects.map((c) => (
          <ContributingProject key={c.id} contProject={c} />
        ))}
      </Grid>
    </>
  );
};

export default UserProjects;
