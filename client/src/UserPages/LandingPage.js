import { useEffect, useState, prevState } from "react";
import SearchBar from "../components/SearchBar";
import Scroller from "../components/Scroller";
import LandingLogin from "../components/LandingLogin";

const LandingPage = () => {
  return (
    <>
      
      <SearchBar />
      <LandingLogin />
      <Scroller />
   
    </>
  );
};
export default LandingPage;