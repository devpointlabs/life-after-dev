import React, { useState } from "react";
import { Grid, Segment } from "semantic-ui-react";
import AddIdeaModal from "./AddIdeaModal";

const SearchResults = ({ results, query }) => {
  const renderAddIdea = () => {
    console.log("Add Idea", results);
    return (
      <div style={spacingStyle}>
        <h3>{query}</h3>
        {<AddIdeaModal query={query} />}
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
          <Grid.Column width={4}>{renderAddIdea()}</Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

const spacingStyle = {
  marginTop: "20px",
};

export default SearchResults;
