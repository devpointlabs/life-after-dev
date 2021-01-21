import Axios from "axios";
import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

const SearchBar = ({ getResults, toggler }) => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(null);

  const handleChange = (e) => {
    let keyword = e.target.value;
    setQuery(keyword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getResults(query);
    toggler(query);
  };

  return (
    <div style={mastheadStyle}>
      <h1 style={mastheadTextStyle}>Life After Dev</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};

const mastheadStyle = {
  borderStyle: "solid",
  textAlign: "center",
  height: "200px",
};

const mastheadTextStyle = {
  paddingTop: "50px",
};

export default SearchBar;
