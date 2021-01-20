import React from "react";

const SearchResults = ({ results }) => {
  return results.map((r) => {
    return <div>{r.title}</div>;
  });
};

export default SearchResults;
