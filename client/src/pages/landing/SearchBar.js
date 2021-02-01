import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Search,
  SearchBarContainer,
  SearchIcon,
} from "../../styles/LandingPageStyle";
import searchicon from "../../icons/searchicon2.png";
import Axios from "axios";

const SearchBar = ({ getQuery }) => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(null);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  let history = useHistory();

  // const getResults = (query) => {
  //   Axios.get(`/api/all_projects/?query=${query}`)
  //     .then((res) => {
  //       setResults(res.data);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       setError(err.response);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  const handleChange = (e) => {
    let keyword = e.target.value;
    setQuery(keyword);
    getQuery(keyword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // getResults(query);
    history.push(`/results/${query}`);
  };

  return (
    <SearchBarContainer>
      <form onSubmit={handleSubmit}>
        <Search
          type="text"
          placeholder="Search in Life After Dev..."
          onChange={(e) => handleChange(e)}
        />
        <SearchIcon src={searchicon} />
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;
