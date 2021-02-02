import Axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useCustomDrop = (user_id, image) => {
  const { setUser } = useContext(AuthContext)
  const [projectPic, setProjectPic] = useState(null)

  const updateProfile = async (user_id, image) => {
    if (image == null) {
      alert("cant be blank");
      return;
    }

    let data = new FormData();
    data.append("file", image);
    try {
      let res = await Axios.put(`/api/user/${user_id}/update-picture`, data)
      setUser(res.data.data)
    } catch (err) {
      console.log(err);
      alert("err occured");
    }
  };

  const updateProject = async (user_id, project_id, image) => {
    if (image == null) {
      alert("cant be blank");
      return;
    }
    let data = new FormData();
    data.append("file", image);
    try {
      let res = await Axios.put(`/api/project/${project_id}/update-picture`, data)
      console.log(res.data)
      setProjectPic(res.data.data.picture)
      } catch (err) {
    console.log(err);
    alert("err occured");
  }
  }

  return  {
    updateProfile,
    updateProject,
    projectPic,
  }
}

export default useCustomDrop