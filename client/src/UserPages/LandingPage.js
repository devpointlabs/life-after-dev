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
  const [toggle, setToggle] = useState(false);

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

  const toggler = (query) => {
    if (query !== null) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <>
      <SearchBar getResults={getResults} toggler={toggler} />
      <SearchResults results={results} toggle={toggle} />
      <Scroller />
    </>
  );
};
export default LandingPage;
