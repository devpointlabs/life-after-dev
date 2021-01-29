import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Segment } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import {
  ResultsCard,
  ResultsContent,
  ResultsDescription,
  ResultsImage,
  ResultsTitle,
} from "../styles/LandingPageStyle";
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
    } else {
      return (
        <div style={spacingStyle}>
          <h3>{query}</h3>
          <Link to={"/register"}>
            <Button color="green">Create New Project</Button>
          </Link>
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
              return (
                <Link to={`/projects/${r.id}`}>
                  <ResultsCard>
                    <ResultsImage src={r.picture} />
                    <ResultsContent>
                      <ResultsTitle>{r.title}</ResultsTitle>
                      <ResultsDescription>{r.description}</ResultsDescription>
                    </ResultsContent>
                  </ResultsCard>
                </Link>
              );
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
