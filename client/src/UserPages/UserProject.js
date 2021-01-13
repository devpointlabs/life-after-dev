import { Card } from 'semantic-ui-react'
import style from './style.css'

export default (props) => {
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