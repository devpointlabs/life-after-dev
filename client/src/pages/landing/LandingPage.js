import SearchBar from "./SearchBar";
import Scroller from "../../components/Scroller";
import LandingLogin from "./LandingLogin";
import SearchResults from "../../components/SearchResults";
import { useState } from "react";
import Axios from "axios";

const LandingPage = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

  const getResults = (query) => {
    Axios.get(`/api/all_projects/?query=${query}`)
      .then((res) => {
        setResults(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.response);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getQuery = (query) => {
    setQuery(query);
  };

  return (
    <>
      <SearchBar getResults={getResults} getQuery={getQuery} />
      <LandingLogin />
      <SearchResults results={results} toggle={toggle} query={query} />
      <Scroller />
    </>
  );
};

export default LandingPage;
