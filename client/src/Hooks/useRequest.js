import Axios from "axios";
import { useState } from "react";

const useRequest = (project, id) => {
  const [requestStatus, setRequestStatus] = useState("Join");
  // const request = {
  //   user_id: user,
  //   project_id: project,
  //   contributor: false,
  // }

  const checkRequests = (project, id) => {
    Axios.get(`/api/projects/${project}/requests`)
      .then((res) => {
        res.data.forEach((r) => {
          if (r.user_id === id) {
            if (r.contributor === true) {
              setRequestStatus("Joined");
            } else {
              setRequestStatus("Pending");
            }
          }
        });
      })
      .catch((err) => {
        console.log("request hook error", err);
      });
  };

  const sendRequest = (project, id) => {
    Axios.post(`/api/projects/${project}/requests`, {
      user_id: id,
      project_id: project,
      contributor: false,
    })
      .then((res) => {
        setRequestStatus("Pending")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    sendRequest,
    checkRequests,
    requestStatus,
  };
};

export default useRequest;
