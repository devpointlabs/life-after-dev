import Axios from "axios";
import { useState } from "react";

const useRequest = (project, id) => {
  // const request = {
  //   user_id: user,
  //   project_id: project,
  //   contributor: false, 
  // }
  

  const checkRequests = (project, id) => {
    let status = "sdfsdf"
    Axios
    .get(`/api/projects/${project}/requests`)
    .then(res => {
      res.data.forEach(r => {
        if (r.user_id === id) {
          if (r.contributor === true) {
            status = "contributor"
          } else {
            status = "pending"
          }
        }
      })
    })
    .catch(console.log)
    return status
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
  }
}

export default useRequest;