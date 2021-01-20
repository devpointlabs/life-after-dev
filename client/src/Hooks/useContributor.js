import Axios from "axios";
import { useState } from "react";

export const useContributor = () => {
 //    request = {
  //   user_id: user,
  //   project_id: project,
  //   contributor: false, 
  // }
  const [contributors, setContributors] = useState([]);
  useEffect(()=> {
    Axios.get("") //need to set custom route
      .then((res) => {
        setContributors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
 
  },[])

}