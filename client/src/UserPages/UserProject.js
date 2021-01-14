import Axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react'
import style from './style.css'

export default (props) => {
  const [comments, setComments] = useState([])

  useEffect(()=> {
    getComments()
  },[])

  const getComments = async () => {
    try {
      let res = await Axios.get(`/api/projects/${props.project.id}/comments`)
      console.log(res.data)
      setComments(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    






    <Card>
      <Card.Content>
        <Card.Header>{props.project.title}</Card.Header>
        <Card.Meta>{props.project.picture}</Card.Meta>
        <Card.Description>{props.project.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Card.Description>{props.project.github_link}</Card.Description>
      </Card.Content>
    </Card>
  )
}