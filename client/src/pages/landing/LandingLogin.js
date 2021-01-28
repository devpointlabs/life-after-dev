import React, { useContext } from "react";
import { Container,} from "semantic-ui-react";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Login from "../../components/Login";
import RequestBox from "../../components/Requests";
import useRequest from "../../hooks/useRequest";


const LandingLogin = () => {
  let history = useHistory();
  let { pathname } = useLocation();
  const { user } = useContext(AuthContext);
  const { sendRequest, checkRequests, requestStatus } = useRequest()

  const loginContainer = {
    borderStyle: "solid",
    textAlign: "center",
    width: "300px",
    float: "right"
  }


    if (user) {
      return(
        <Container style={loginContainer}>
        <h1>Welcome Back { user.firstname} {user.lastname}!</h1>
          <p>pending requests here</p>
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





