import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {
  Logo,
  NavColumn,
  NavIcon,
  NavIconBottom,
  AuthButton,
  StickyNav,
  NavActiveSquare,
  NavInactiveSquare,
  NavActiveIcon,
  NavInactiveIcon,
  NavIconBottomSquare,
  NavIconBottomInactive,
  AuthButtonDiv,
} from "../styles/GlobalStyle";
import devpointlogo from "../icons/LADLogo.png";
import homeiconz from "../icons/homeicon.png";
import profileiconz from "../icons/profileicon.png";
import settingsiconz from "../icons/settingsicon.png";
import logouticonz from "../icons/logouticon.png";
import homeicon from "../icons/home2x.png";
import profileicon from "../icons/user2x.png";
import settingsicon from "../icons/settings2x.png";
import addicon from "../icons/plus2x.png";
import logouticon from "../icons/logout2x.png";
import ProjectFormModal from "./ProjectFormModal";
import NavAddModal from "./NavAddModal";

const Navbar = (props) => {
  let history = useHistory();
  let { pathname } = useLocation();
  const { user, handleLogout } = useContext(AuthContext);
  const [homeActive, setHomeActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);
  const [addActive, setAddActive] = useState(false);

  useEffect(() => {
    homeToggle();
  }, []);

  const homeToggle = () => {
    setHomeActive(true);
    setProfileActive(false);
    setSettingsActive(false);
  };

  const profileToggle = () => {
    setHomeActive(false);
    setProfileActive(true);
    setSettingsActive(false);
  };

  const settingsToggle = () => {
    setHomeActive(false);
    setProfileActive(false);
    setSettingsActive(true);
  };

  const renderHomeIcon = () => {
    if (!homeActive) {
      return (
        <NavInactiveSquare onClick={() => homeToggle()}>
          <NavInactiveIcon src={homeicon} />
        </NavInactiveSquare>
      );
    } else if (homeActive) {
      return (
        <>
          <NavActiveSquare>
            <NavActiveIcon src={homeicon} />
          </NavActiveSquare>
        </>
      );
    }
  };

  const renderProfileIcon = () => {
    if (!profileActive) {
      return (
        <NavInactiveSquare onClick={() => profileToggle()}>
          <NavInactiveIcon src={profileicon} />
        </NavInactiveSquare>
      );
    } else if (profileActive) {
      return (
        <NavActiveSquare>
          <NavActiveIcon src={profileicon} />
        </NavActiveSquare>
      );
    }
  };

  const renderSettingsIcon = () => {
    if (!settingsActive) {
      return (
        <NavInactiveSquare onClick={() => settingsToggle()}>
          <NavInactiveIcon src={settingsicon} />
        </NavInactiveSquare>
      );
    } else if (settingsActive) {
      return (
        <NavActiveSquare>
          <NavActiveIcon src={settingsicon} />
        </NavActiveSquare>
      );
    }
  };

  const topNavItems = () => {
    if (user) {
      return (
        <>
          <Link to={`/user/${user.id}`}>{renderProfileIcon()}</Link>
          <NavAddModal />
          <Link to={`/profile/${user.id}/settings`}>
            {renderSettingsIcon()}
          </Link>
          <Link>
            {
              <NavIconBottomSquare>
                <NavIconBottomInactive
                  src={logouticon}
                  onClick={() => handleLogout(history)}
                />
              </NavIconBottomSquare>
            }
          </Link>
        </>
      );
    } else {
      return (
        <>
          <AuthButtonDiv>
            <Link to="/login">
              <AuthButton
                id="login"
                name="login"
                active={pathname === "/login"}
              >
                Login
              </AuthButton>
            </Link>
            <Link to="/register">
              <AuthButton
                id="register"
                name="register"
                active={pathname === "/register"}
              >
                Sign Up
              </AuthButton>
            </Link>
          </AuthButtonDiv>
        </>
      );
    }
  };

  return (
    <NavColumn>
      <StickyNav>
        <Link to="/">
          <Logo src={devpointlogo} />
        </Link>
        <Link to="/">{renderHomeIcon()}</Link>
        {topNavItems()}
      </StickyNav>
    </NavColumn>
  );
};

export default Navbar;
