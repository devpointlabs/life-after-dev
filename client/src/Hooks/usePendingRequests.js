import Axios from "axios"
import { useState } from "react"

const usePendingRequests = (userid, projectid) => {
  const [userProjectList, setUserProjectList] = useState([])

  const getUserProjects = (userid) => {
    Axios.get(`/api/users/${userid}/projects`)
    .then(res => {
      let proj = []
      res.data.forEach(p => {
        proj.push(p.id)
      })
      setUserProjectList(proj)
    })
    .catch(console.log)
  }

  // const filterProjects = (list) => {
  //   console.log("hitting")
  //   let proj = []
  //   list.forEach(p => {
  //     proj.push(p.id)
  //   })
  //   console.log(proj)
  //   setUserProjectList(proj)
  // }
  return {getUserProjects, userProjectList}
}

export default usePendingRequests