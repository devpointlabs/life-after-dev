import SearchBar from "../components/SearchBar";
import Scroller from "../components/Scroller";
import SearchResults from "../components/SearchResults";
import { useState } from "react";
import Axios from "axios";
import { Grid } from "semantic-ui-react";

const LandingPage = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getResults = (query) => {
    Axios.get(`/api/all_projects/?query=${query}`)
      .then((res) => {
        console.log("search bar call", res.data);
        setResults(res.data);
        setError(null);
        // debugger;
      })
      .catch((err) => {
        setError(err.response);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <SearchBar getResults={getResults} />
      <SearchResults results={results} query={query} />
      <Scroller />
    </>
  );
};
export default LandingPage;
