import Axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Icon } from "semantic-ui-react";
import useRequest from "../hooks/useRequest";
import { AuthContext } from "../providers/AuthProvider";
import { JoinButton } from "../styles/GlobalStyle";
import { JoinButtonDiv } from "../styles/ProjectShowStyle";

const RequestAction = (props) => {
  const { sendRequest, checkRequests, requestStatus } = useRequest();
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) checkRequests(props.projectId, props.userId);
    else console.log("it worked");
  }, []);

  const handleClick = () => {
    sendRequest(props.projectId, props.userId);
  };
  return (
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
export default RequestAction;
