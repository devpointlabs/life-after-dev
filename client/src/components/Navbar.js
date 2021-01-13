import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import AuthConsumer, { AuthContext } from "../providers/AuthProvider.js";

const Navbar1 = (props) => {
  let history = useHistory();
  let { pathname } = useLocation();
  const { user, handleLogout } = useContext(AuthContext);

  const rightNavItems = () => {
    if (user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            onClick={() => history.push(`/profile/${user.id}/settings`)}
            icon="setting"
          />

          <Menu.Item name="Logout" onClick={() => handleLogout(history)} />
        </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item id="login" name="login" active={pathname === "/login"} />
          </Link>
          <Link to="/register">
            <Menu.Item
              id="register"
              name="register"
              active={pathname === "/register"}
            />
          </Link>
        </Menu.Menu>
      );
    }
  };
  return (
    <div>
      <Menu pointing secondary>
        <Link to="/">
          <Menu.Item name="home" id="home" active={pathname === "/"} />
        </Link>
        {rightNavItems()}
      </Menu>
    </div>
  );
};

export default Navbar1;
