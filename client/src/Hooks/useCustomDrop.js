import Axios from "axios";

const useCustomDrop = (user_id, image) => {

  const updateProfile = async (user_id, image) => {
    if (image == null) {
      alert("cant be blank");
      return;
    }
    console.log('reached')
    let data = new FormData();
    data.append("file", image);
    try {
      let res = Axios.put(`/api/user/${user_id}/update-picture`, data)
      console.log(res)
      debugger
    } catch (err) {
      console.log(err);
      alert("err occured");
    }
  };

  return  {
    updateProfile,
  }
}

export default useCustomDrop