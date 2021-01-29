import React, { useContext, useState, useEffect } from "react";
import { Container,} from "semantic-ui-react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Axios from "axios";
import Login from "../../components/Login";
import RequestBox from "../../components/Requests";
import useRequest from "../../hooks/useRequest";


const LandingLogin = () => {
  let history = useHistory();
  let { pathname } = useLocation();
  const { user } = useContext(AuthContext);
  const { sendRequest, checkRequests, requestStatus } = useRequest()
  const [pendingRequests, setPendingRequests] = useState(0)
 
  
  
  const loginContainer = {
    borderStyle: "solid",
    textAlign: "center",
    width: "300px",
    float: "right"
  }
  useEffect(() => {
    getPendingRequests()
  }, []);
 
   
  
  const getPendingRequests = () => {
    if (user) {
      Axios.get(`api/requests/${user.id}/get_pending_requests`) 
      .then((res) => {
       let requestCounter = 0
        res.data.forEach((r) => {
          if (r.user_id === user.id) {
            requestCounter = requestCounter + 1
          }
          else return 
        })
        setPendingRequests(requestCounter)
       })
      .catch((err) => {
        console.log(err);
      }) 
    }
    else {
      console.log("")
   }
 
  }



    if (user) {
      return(
        <Container style={loginContainer}>
        <h1>Welcome Back { user.firstname} {user.lastname}!</h1>
          <p>You have
          <Link to={`/user/${user.id}`}>
             {pendingRequests}
             </Link>
             pending requests</p>
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





