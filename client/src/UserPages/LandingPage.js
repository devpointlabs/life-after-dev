import { useEffect, useState, prevState } from "react";

import SearchBar from "../components/SearchBar";
import Scroller from "../components/Scroller";

const LandingPage = () => {
  return (
    <>
      <SearchBar />
      <Scroller />
    </>
  );
};

export default LandingPage;
