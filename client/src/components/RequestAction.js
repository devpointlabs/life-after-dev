import Axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Icon } from "semantic-ui-react";
import useRequest from "../hooks/useRequest";
import { AuthContext } from "../providers/AuthProvider";
import { JoinButton } from "../styles/GlobalStyle";
import { JoinButtonDiv } from "../styles/ProjectShowStyle";
import styled from "styled-components";

const RequestAction = (props) => {
  const { sendRequest, checkRequests, requestStatus } = useRequest();
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) checkRequests(props.projectId, props.userId);
    else console.log("it worked");
  }, [props.projectId]);

  const handleClick = () => {
    sendRequest(props.projectId, props.userId);
  };

  return props.page == "landing" ? (
    <StyledButton onClick={handleClick}>{requestStatus}</StyledButton>
  ) : (
    <JoinButton
      style={{ borderRadius: 10 }}
      color="black"
      onClick={handleClick}
    >
      <Icon name="bell outline" />
      {requestStatus}
    </JoinButton>
  );
};

const StyledButton = styled.button`
  background-color: #53d769;
  border-radius: 10px;
  border: none;
  color: white;
  margin: 30px auto;
  font-size: 16px;
  cursor: pointer;
  height: 60px;
  outline: none;
  width: 170px;
`;

export default RequestAction;
