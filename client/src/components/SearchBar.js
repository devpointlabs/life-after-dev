import Axios from "axios";
import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(null);

  const getResults = () => {
    Axios.get(`/api/all_projects/?query=${search}`)
      .then((res) => {
        console.log("search bar call", res.data);
        setResults(res.data);
        setError(null);
        // debugger;
      })
      .catch((err) => {
        setError(err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    let keyword = e.target.value;
    console.log(keyword);
    setSearch(keyword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit handled");
    getResults();
  };

  const renderResults = () => {};

  return (
    <div style={mastheadStyle}>
      <h1 style={mastheadTextStyle}>Life After Dev</h1>
      {/* <Search onSearchChange={handleSearchChange} /> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleChange(e)}
          //onsubmit, add getresults method to useeffect
        />
      </form>
      <h2>{results.title}</h2>
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
