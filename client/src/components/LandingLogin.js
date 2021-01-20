import React, { useContext } from "react";
import { Container,} from "semantic-ui-react";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Login from "../components/Login";
import Requests from "../components/Requests";


const LandingLogin = () => {
  let history = useHistory();
  let { pathname } = useLocation();
  const { user } = useContext(AuthContext);

  const loginContainer = {
    borderStyle: "solid",
    textAlign: "center",
    width: "300px",
    float: "right"
  }


    if (user) {
      return(
        <Container style={loginContainer}>
        <h1>Pending Requests Here</h1>
        {/* <Requests /> */}
        </Container>
      )

    }else
      return (
      <>
      <Container style={loginContainer}>
      <Login />
    </Container>
      
      </>
    )
  };

  export default LandingLogin;





