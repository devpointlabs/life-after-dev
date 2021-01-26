import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import usePendingRequests from "../Hooks/usePendingRequests";
import { AuthContext } from "../providers/AuthProvider";

export default (props) => {
  const { getUserProjects, userProjectList } = usePendingRequests();
  const [filteredList, setFilteredList] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getUserProjects(user.id);
    getMyRequests(userProjectList);
  }, []);

  const getMyRequests = (list) => {
    let filteredRequests = [];
    list.forEach((p) => {
      Axios.get(`api/project/${p}/requests`)
        .then((res) => {
          filteredRequests.push(res.data);
        })
        .catch(console.log("get request error"));
    });
    setFilteredList(filteredRequests);
  };

  return (
    <>
      <h1>Request Box</h1>
      <h1>{user.id}</h1>
      {userProjectList.map((i) => (
        <span>{i}</span>
      ))}
      {filteredList.map((l) => (
        <span>tetset{l.id}</span>
      ))}
    </>
  );
};
