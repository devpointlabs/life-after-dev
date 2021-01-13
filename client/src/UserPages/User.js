import axios from 'axios'
import { useState, useEffect} from "react"
import { Card } from 'semantic-ui-react'
import UserProject from './UserProject'


export default (props) => {
  const [user, setUser] = useState({})
  const [projects, setProjects] = useState([])
  const [comments, setComments] = useState([])

  useEffect(()=> {
    getUser();
    getProjects();
  },[])
  
  const getUser = async () => {
    try {
      let res = await axios.get(`/api/users/${props.match.params.id}`)
      //add flexible call
      console.log(res.data)
      setUser(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  const getProjects = async () => {
    try {
      let res = await axios.get(`/api/users/${props.match.params.id}/projects`)
      console.log(res.data)
      setProjects(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  const getComments = async () => {
    try {
      let res = await axios.get("/api/projects/1/comments")
      console.log(res.data)
      setComments(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
    <h1>First Name: {user.firstname}</h1>
    <h1>Last Name: {user.lastname}</h1>
    <h1>Email: {user.email}</h1>
    <h1>Tag: {user.tag}</h1>


    <h1>Github_link {user.github_link} </h1>
    <h1>Linkedin_link{user.linkedin_link} </h1>
    <h1>Image {user.image} </h1>
    <Card.Group>
      {projects.map(p => (
        <UserProject project = {p}/>
      ))}
    </Card.Group>
    </>
  )
}