import Axios from "axios";
import { useState } from "react";

const useRequest = (project, id) => {
  const [requestStatus, setRequestStatus] = useState("none")
  // const request = {
  //   user_id: user,
  //   project_id: project,
  //   contributor: false, 
  // }


  const checkRequests = (project, id) => {   
    Axios
    .get(`/api/projects/${project}/requests`)
    .then(res => {
      res.data.forEach(r => {
        if (r.user_id === id) {
          if (r.contributor === true) {
            setRequestStatus("contributor")
          } else {
            setRequestStatus("pending")
          }
        }
      })
    })
    .catch(console.log)
  }

  const sendRequest = (project, id) => {
    Axios
    .post(`/api/projects/${project}/requests`, 
      {
        user_id: id,
        project_id: project,
        contributor: false,
      }
    )
    .then(res => 
      console.log(res))
    .catch(console.log)
  }

  return {
    sendRequest,
    checkRequests,
    requestStatus,
  }
}

export default useRequest;