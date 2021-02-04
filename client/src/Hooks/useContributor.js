import Axios from "axios";
import { useState, useEffect } from "react";

export const useContributor = () => {
  const [contributors, setContributors] = useState([]);

  const getContributors = (project_id) => {
    Axios.get(`/api/projects/${project_id}/get_contributors`)
      .then((res) => {
        setContributors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    contributors,
    getContributors,
  };
};

export default useContributor;
