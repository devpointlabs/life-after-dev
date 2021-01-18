import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Search } from "semantic-ui-react";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("/api/projects")
      .then((res) => {
        console.log(res);
        setData(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (e) => {
    setData({ search: e.target.value });
  };

  return (
    <div style={mastheadStyle}>
      <h1 style={mastheadTextStyle}>Life After Dev</h1>
      <Search onSearchChange={handleSearchChange} />
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
