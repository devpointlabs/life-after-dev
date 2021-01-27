import React, { useEffect, useState } from "react";
import {
  Search,
  SearchBarContainer,
  SearchIcon,
} from "../../styles/LandingPageStyle";
import searchicon from "../../icons/searchicon2.png";

const SearchBar = ({ getResults, getQuery }) => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(null);

  const handleChange = (e) => {
    let keyword = e.target.value;
    setQuery(keyword);
    getQuery(keyword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getResults(query);
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
