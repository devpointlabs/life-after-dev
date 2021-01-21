import Axios from "axios";
import { useState } from "react";

export const useContributor = (project_id) => {

  const [contributors, setContributors] = useState([]);
  useEffect(()=> {
    Axios.get(`/projects/${project_id}/get_contributors`) 
      .then((res) => {
        console.log(res)
        setContributors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
 
  },[])

  return {contributors}
}

export default useContributor;