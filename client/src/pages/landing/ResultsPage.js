import Axios from "axios";
import React, { useEffect, useState } from "react";
import SearchResults from "../../components/SearchResults";
import SearchBar from "./SearchBar";

const ResultsPage = (props) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(props.match.params.query);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getResults(query);
  }, []);

  const getResults = (query) => {
    Axios.get(`/api/all_projects/?query=${query}`)
      .then((res) => {
        setResults(res.data);
        console.log(query, res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <SearchBar  />
      <SearchResults results={results} query={query} />
    </>
  );
};

export default ResultsPage;
