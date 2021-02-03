import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Segment } from "semantic-ui-react";
import ContributingProject from "../pages/profile/ContributingProject";
import { AuthContext } from "../providers/AuthProvider";
import {
  ResultsCard,
  ResultsContent,
  ResultsDescription,
  ResultsImage,
  ResultsTitle,
} from "../styles/LandingPageStyle";
import ProjectFormModal from "./ProjectFormModal";
import styled from "styled-components";
import { QueryContext } from "../providers/QueryProvider";

const SearchResults = ({ results }) => {
  const { user } = useContext(AuthContext);
  const { query, setQuery } = useContext(QueryContext);

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
  // console.log("results", results);
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <Flex>
              {results?.map((r) => (
                <ContributingProject key={r.id} project_id={r.id} />
              ))}
            </Flex>
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

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default SearchResults;
