import { Link } from "react-router-dom"
import { Menu } from "semantic-ui-react"

export default () => {
  return (
    <Menu>
      <Link to="/">
        <Menu.Item
          name='Home'
        >
          Home
        </Menu.Item>
      </Link>
      <Link to="/things">
        <Menu.Item
          name='Things'
        >
          Things
        </Menu.Item>
      </Link>
    </Menu>
  )
}