import React, { useContext, useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Axios from "axios";
import useRequest from "../../hooks/useRequest";
import styled from 'styled-components';
import {
  LoginContainer,
  LogInButton,
  Input,
  LandingLoginForm,
  UserPic,
} from "../../styles/LandingPageStyle";

const LandingLogin = (props) => {
  let history = useHistory();
  let { pathname } = useLocation();
  const { user } = useContext(AuthContext);
  const { sendRequest, checkRequests, requestStatus } = useRequest();
  const [pendingRequests, setPendingRequests] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(AuthContext);

  useEffect(() => {
    getPendingRequests();
  }, []);

  const getPendingRequests = () => {
    if (user) {
      Axios.get(`api/requests/${user.id}/get_pending_requests`)
        .then((res) => {
          let requestCounter = 0;
          res.data.forEach((r) => {
            if (r.user_id === user.id) {
              requestCounter = requestCounter + 1;
            } else return;
          });
          setPendingRequests(requestCounter);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password }, props.history);
  };


  const MyProfileButton = styled.button`
  background-color: #42a5f5;
  border-radius: 10px;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  height: 40px;
  outline: none;
  width: 120px;
  `;
  const LogInPic = styled.img`
  border-radius: 15px;
  height: 70px;
  width: 70px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  
  `;

  if (user) {
    return (
      <LoginContainer>
        <div>
          <LogInPic  src={`${user.image}`} /></div>
          <h2>Hello {user.firstname} {user.lastname}</h2>
          
        <p>
          You have {pendingRequests} pending requests
             </p>
             <Link to={`/user/${user.id}`}> 
          <MyProfileButton>My Profile</MyProfileButton>
          </Link>
      </LoginContainer>
    );
  } else
    return (
      <>
        <LoginContainer>
          <LandingLoginForm onSubmit={handleSubmit}>
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
    );
};

export default LandingLogin;
