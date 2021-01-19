import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../providers/AuthProvider';


export default () => {
  const [requests, setRequests] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(()=> {
    getRequests();
    sortRequests();
  },[])

  const getRequests = async () => {
    try {
      let res = await axios.get(`/api/projects/1/requests`)
      setRequests(res.data)
    }
    catch (err) {
      console.log(err)
    }
  } 

  const sortRequests = () => {
    console.log(requests)
    let filteredRequests = requests.filter(r => r.project_id === user.id)
    return (
      <h1>{filteredRequests}</h1>
      )
  }
  return (
    <>
      <h1>Requests</h1>
      <ul>
        <li>{requests.first.user_id}</li>
      </ul>
    </>
    
  )
}