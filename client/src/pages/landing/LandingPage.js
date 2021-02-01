import SearchBar from "./SearchBar";
import Scroller from "./Scroller";
import LandingLogin from "./LandingLogin";
import SearchResults from "../../components/SearchResults";
import { useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Axios from "axios";

const LandingPage = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const { user } = useContext(AuthContext);

  const getResults = (query) => {
    Axios.get(`/api/all_projects/?query=${query}`)
      .then((res) => {
        setResults(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.response);
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
      {user?.id !== null && <LandingLogin />}
      {/* <SearchResults results={results} query={query} /> */}
      <Scroller currentUser={user} />
    </>
  );
};

export default LandingPage;
