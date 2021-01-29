import Axios from "axios";
import { useEffect, useState, useContext } from "react";
import useRequest from "../hooks/useRequest";
import { AuthContext } from "../providers/AuthProvider";


const RequestAction = (props) => {
  
  
  const { sendRequest, checkRequests, requestStatus, } = useRequest()
  const {user: currentUser} = useContext(AuthContext)

  useEffect(() => {
    if (currentUser)
      checkRequests(props.projectId, props.userId)
    else 
    console.log("it worked")  
  }, [])
  


  const handleClick = () => {
    sendRequest(props.projectId, props.userId)
    }
  return (
    <button onClick={handleClick}>{requestStatus}</button>

  )


















}
export default RequestAction;