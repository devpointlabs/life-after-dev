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
          </h1>

          <p>
            {" "}
            Life After Dev is a place for developers to share their ideas and
            explore other projects that they might be interested in. Although
            many of us started at{" "}
            <a href="https://www.devpointlabs.com/">DevPointLabs</a>, anyone can
            join and check out what other members are creating. To get started,
            simply scroll down below and find something you like!{" "}
          </p>
          <p>
            <Link to={`/about`}>Learn about Life After Dev's developers</Link>
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
