import SearchBar from "./SearchBar";
import Scroller from "./Scroller";
import LandingLogin from "./LandingLogin";
import SearchResults from "../../components/SearchResults";
import { useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Axios from "axios";
import { Link } from "react-router-dom";
import { SiteInfoRegisterButton, SiteInfoContainer, LandingInfoWrap} from "../../styles/LandingPageStyle";


const LandingPage = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const { user } = useContext(AuthContext);

  const getResults = (query) => {
    Axios.get(`/api/all_projects/?query=${query}`)
      .then((res) => {
        setResults(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getQuery = (query) => {
    setQuery(query);
  };

  return (
    <>
      
      <SearchBar getResults={getResults} getQuery={getQuery} />
      <LandingInfoWrap>
      <SiteInfoContainer>
                <h1>
                  Life After Dev
                  <h4>Site Info</h4>
                </h1>
               
          <p>  Life After Dev is a place for developers to share their ideas and explore other projects
                  that they might be interested in. Although many of us started at <a href="https://www.devpointlabs.com/">DevPointLabs</a>,
                  anyone can join and check out what other members creating.
                  To get started, simply scroll down below and find something you like!  </p>
                <Link to={`/register`}>
                <SiteInfoRegisterButton>Register</SiteInfoRegisterButton>
                </Link>
            </SiteInfoContainer> {user?.id !== null && <LandingLogin />}
            </LandingInfoWrap>
      
      <Scroller currentUser={user} />
    </>
  );
};

export default LandingPage;
