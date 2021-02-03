import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Search,
  SearchBarContainer,
  SearchIcon,
} from "../../styles/LandingPageStyle";
import searchicon from "../../icons/searchicon.png";
import Axios from "axios";
import { QueryContext } from "../../providers/QueryProvider";

const SearchBar = () => {
  const [loading, setLoading] = useState(true);
  // const [query, setQuery] = useState(null);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const { query, setQuery } = useContext(QueryContext);
  let history = useHistory();

  const handleChange = (e) => {
    let keyword = e.target.value;
    setQuery(keyword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/results/${query}`);
  };

  return (
    <SearchBarContainer>
      <form onSubmit={handleSubmit}>
        <Search
          type="text"
          placeholder="Search in Life After Dev..."
          onChange={(e) => handleChange(e)}
          value={query}
        />
        <SearchIcon src={searchicon} />
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;
