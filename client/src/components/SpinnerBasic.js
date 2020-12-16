import { Dimmer, Image, Loader, Segment } from "semantic-ui-react"

export default () => {
  return (
    <div>
    <Segment>
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
  )
}