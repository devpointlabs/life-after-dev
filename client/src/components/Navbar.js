import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {
  Logo,
  NavColumn,
  NavIcon,
  NavIconBottom,
  AuthButton,
} from "../styles/GlobalStyle";
import devpointlogo from "../icons/devpointlogo.png";
import homeicon from "../icons/homeicon.png";
import profileicon from "../icons/profileicon.png";
import settingsicon from "../icons/settingsicon.png";
import logouticon from "../icons/logouticon.png";

const Navbar = (props) => {
  let history = useHistory();
  let { pathname } = useLocation();
  const { user, handleLogout } = useContext(AuthContext);

  const topNavItems = () => {
    if (user) {
      return (
        <>
          <Link to={`/user/${user.id}`}>
            <NavIcon src={profileicon} />
          </Link>
          <Link to={`/profile/${user.id}/settings`}>
            <NavIcon src={settingsicon} />
          </Link>
          <Link>
            <NavIconBottom
              src={logouticon}
              onClick={() => handleLogout(history)}
            />
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login">
            <AuthButton id="login" name="login" active={pathname === "/login"}>
              Login
            </AuthButton>
          </Link>
          <Link to="/register">
            <AuthButton
              id="register"
              name="register"
              active={pathname === "/register"}
            >
              Register
            </AuthButton>
          </Link>
        </>
      );
    }
  };

  return (
    <NavColumn>
      <div>
        <Link to="/">
          <Logo src={devpointlogo} />
        </Link>
        <Link to="/">
          <NavIcon src={homeicon} />
        </Link>
        {topNavItems()}
      </div>
    </NavColumn>
  );
};

export default Navbar;
