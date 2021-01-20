import React, { useState } from "react";

const AddIdea = ({ data, query }) => {
  if (query != null) {
    return (
      <div style={spacingStyle}>
        <h1>Add Ideas</h1>
      </div>
    );
  } else if (query == null) {
    return null;
  }
};

const spacingStyle = {
  marginTop: "20px",
};

export default AddIdea;
