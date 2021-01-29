import Axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "semantic-ui-react"

export default (props) => {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    getUser();
  },[])

  const getUser = async () => {
    try{
    let res = await Axios.get(`/api/users/${props.request.user_id}`)
    setUser(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const acceptRequest = async () => {
    try {
      let res = await Axios.put(`/api/projects/${props.project.id}/requests/${props.request.id}`,
      {
        project_id: props.project.id,
        user_id: props.request.user_id,
        contributor: true,
      })
      console.log(res)
    }
    catch (err){
      console.log(err)
    }
  }

  const denyRequest = async () => {
    try {
      let res = await Axios.delete(`/api/projects/${props.project.id}/requests/${props.request.id}`)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <h1>{user?.firstname} {user?.lastname} wants to join {props.project.title}</h1>
      <Button onClick={()=> acceptRequest()}> 
        Accept
      </Button>
      <Button onClick={()=> denyRequest()}>
        Decline
      </Button>
    </>
  )
}