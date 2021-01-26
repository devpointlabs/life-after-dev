import React, { useState } from "react";
import { Grid, Segment } from "semantic-ui-react";
import ProjectFormModal from "./ProjectFormModal";

const SearchResults = ({ results, query }) => {
  const renderProjectFormModal = () => {
    return (
      <div style={spacingStyle}>
        <h3>{query}</h3>
        <ProjectFormModal query={query} />
      </div>
    );
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
          <Grid.Column width={4}>{renderProjectFormModal()}</Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

const spacingStyle = {
  marginTop: "20px",
};

export default SearchResults;
