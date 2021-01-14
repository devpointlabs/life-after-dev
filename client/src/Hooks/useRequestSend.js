import Axios from "axios";
import { useState } from "react";

const useRequestSend = (targetproject, targetuser) => {
console.log(targetproject)
console.log(targetuser)

const request = {
  user_id: targetuser,
  project_id: targetproject,
}
Axios.post(`/api/projects/${targetproject}/requests`, request)
}

export default useRequestSend;