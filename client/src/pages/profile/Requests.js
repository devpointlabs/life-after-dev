import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../providers/AuthProvider';
import IndividualRequest from "./IndividualRequest";


export default (props) => {
  const [requests, setRequests] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(()=> {
    getActiveRequests();
  },[])

  const getActiveRequests = async () => {
    try {
      let res = await axios.get(`/api/projects/${props.project.id}/inactive`)
      setRequests(res.data)
    }
    catch (err) {
      console.log(err)
    }
  } 
  return (
    <>
      {requests.map(r => (
          <IndividualRequest request={r} project={props.project}/>
      ))}
    </>
    
  )
}