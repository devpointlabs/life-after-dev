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
  SearchCreateButton,
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
            <SearchCreateButton color="green">
              Create New Project
            </SearchCreateButton>
          </Link>
        </div>
      );
    }
  };

  const renderNoResults = () => {
    if (!query) {
      return <h3>No Results</h3>;
    }
  };

  const renderResults = () => {
    if (results)
      return results?.map((r) => {
        <>
          <ContributingProject key={r.id} project_id={r.id} />
          <span style={{ marginRight: 20 }}></span>
        </>;
      });
  };

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            {renderNoResults()}
            {renderProjectFormModal()}
            <Flex>
              {/* {results?.map((r) => (
                <ContributingProject key={r.id} project_id={r.id} />
              ))} */}
              {renderResults()}
            </Flex>
          </Grid.Column>
          <Grid.Column width={4}>
            {/* {query ? renderProjectFormModal() : renderNothing()} */}
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
