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

  return <Search onSearchChange={handleSearchChange} />;
};

export default SearchBar;
