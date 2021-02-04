import React, { useState } from "react";

export const QueryContext = React.createContext();
export const QueryConsumer = QueryContext.Consumer;

const QueryProvider = (props) => {
  const [query, setQuery] = useState("");

  return (
    <QueryContext.Provider
      value={{
        query,
        setQuery,
      }}
    >
      {props.children}
    </QueryContext.Provider>
  );
};

export default QueryProvider;
