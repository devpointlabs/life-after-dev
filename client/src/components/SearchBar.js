import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Search } from "semantic-ui-react";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    Axios.get(`/api/all_projects/?query=${search}`)
      .then((res) => {
        console.log("search bar call", res);
        setProjects(res.data);
        setError(null);
        // debugger;
      })
      .catch((err) => {
        setError(err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (e) => {
    let keyword = e.target.value;
    setSearch(keyword);
  };

  const items = projects
    .filter((data) => {
      if (search == null) return "";
      else if (data.title.toLowerCase().includes(search.toLowerCase()))
        return data;
    })
    .map((data) => {
      return <div>{data.title}</div>;
    });

  return (
    <div style={mastheadStyle}>
      <h1 style={mastheadTextStyle}>Life After Dev</h1>
      {/* <Search onSearchChange={handleSearchChange} /> */}
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearchChange(e)}
      />
      <h2>{items}</h2>
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
