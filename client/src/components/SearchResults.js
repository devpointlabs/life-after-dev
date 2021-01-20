import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import AddIdea from "./AddIdea";

const SearchResults = ({ results, query }) => (
  <div>
    <Grid>
      <Grid.Row>
        <Grid.Column width={12}>
          {results?.map((r) => {
            return <Segment>{r.title}</Segment>;
          })}
        </Grid.Column>
        <Grid.Column width={4}>
          <AddIdea data={results} query={query} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default SearchResults;
