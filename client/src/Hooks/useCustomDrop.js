import Axios from "axios";
import { useContext } from "react";

const useCustomDrop = (user_id, image) => {

  const updateProfile = async (user_id, image) => {
    if (image == null) {
      alert("cant be blank");
      return;
    }

    let data = new FormData();
    data.append("file", image);
    try {
      let res = Axios.put(`/api/user/${user_id}/update-picture`, data)
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
      let res = Axios.put(`/api/project/${project_id}/update-picture`, data)
  } catch (err) {
    console.log(err);
    alert("err occured");
  }
  }

  return  {
    updateProfile,
    updateProject,
  }
}

export default useCustomDrop;