import React, { useContext, useState } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import ProjectFormModal from "./ProjectFormModal";

const SearchResults = ({ results, query }) => {
  const { user } = useContext(AuthContext);

  const renderProjectFormModal = () => {
    if (user) {
      return (
        <div style={spacingStyle}>
          <h3>{query}</h3>
          <ProjectFormModal query={query} />
        </div>
      );
    }
  };

  const renderNothing = () => {
    return <span></span>;
  };

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            {results?.map((r) => {
              return <Segment>{r.title}</Segment>;
            })}
          </Grid.Column>
          <Grid.Column width={4}>
            {query ? renderProjectFormModal() : renderNothing()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

const spacingStyle = {
  marginTop: "20px",
};

export default SearchResults;
