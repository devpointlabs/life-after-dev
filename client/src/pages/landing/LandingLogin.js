import React, { useContext, useState, useEffect } from "react";
import { Container,} from "semantic-ui-react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Axios from "axios";
import useRequest from "../../hooks/useRequest";
import { LoginContainer, LogInButton, Input, LandingLoginForm} from "../../styles/LandingPageStyle";



const LandingLogin = (props) => {
  let history = useHistory();
  let { pathname } = useLocation();
  const { user } = useContext(AuthContext);
  const { sendRequest, checkRequests, requestStatus } = useRequest()
  const [pendingRequests, setPendingRequests] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { handleLogin } = useContext(AuthContext);
 

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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({email,password}, props.history);
  }




    if (user) {
      return(
        <LoginContainer>
        <h1>Welcome Back { user.firstname} {user.lastname}!</h1>
          <p>You have
          <Link to={`/user/${user.id}`}>
             {pendingRequests}
             </Link>
             pending requests</p>
        </LoginContainer>
      )

    }else
      return (
      <>
          <LoginContainer>
            
      <LandingLoginForm onSubmit={handleSubmit} >
        <Input 
          label="Email"
          autoFocus
          required
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          required
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
       
        <LogInButton primary type="submit">
            Login
          </LogInButton>
          </LandingLoginForm>
      </LoginContainer>
      
      </>
    )
  };

  export default LandingLogin; 





