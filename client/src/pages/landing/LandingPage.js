import SearchBar from "./SearchBar";
import Scroller from "./Scroller";
import LandingLogin from "./LandingLogin";
import SearchResults from "../../components/SearchResults";
import { useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Axios from "axios";
import { Link } from "react-router-dom";
import {
  SiteInfoRegisterButton,
  SiteInfoContainer,
  LandingInfoWrap,
} from "../../styles/LandingPageStyle";

const LandingPage = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const { user } = useContext(AuthContext);


  return (
    <>
      <SearchBar />
      <LandingInfoWrap>
        <SiteInfoContainer>
          <h1>
            Life After Dev
            <h4>Site Info</h4>
          </h1>

          <p>
            Welcome to Life After Dev! This is tool for DevPointLabs alumni to
            show off, collaborate, and work together on any projects in any
            stage whether it's just an idea or a completed project. We hope you
            enjoy it!{" "}
          </p>
          <Link to={`/register`}>
            <SiteInfoRegisterButton>Register</SiteInfoRegisterButton>
          </Link>
        </SiteInfoContainer>{" "}
        {user?.id !== null && <LandingLogin />}
      </LandingInfoWrap>

      <Scroller currentUser={user} />
    </>
  );
};

export default LandingPage;
