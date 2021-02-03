import { Button } from "semantic-ui-react";
import styled from "styled-components";

// Full-width app container. Top level div.
export const AppContainer = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  background-color: #f7f7f7;
`;
// 2 sections, 'nav' and 'main'
export const AppGrid = styled.div`
  display: grid;
  width: 100%px;
  height: 100%;
  grid-template-areas: "nav main";
  grid-template-rows: fit-content(100%);
  grid-template-columns: 165px 1275px;
  margin: auto;
  background-color: #f7f7f7;
`;

////// Nav Styles ///////
export const NavColumn = styled.div`
  grid-area: nav;
  background-color: #0559fd;
  min-height: 100vh;
  display: block;
`;

export const StickyNav = styled.div`
  display: block;
  margin: 43px auto 0px auto;
  top: 65px;
  position: sticky;
  position: -webkit-sticky;
`;

export const Logo = styled.img`
  display: block;
  margin: 65px auto 70px auto;
  height: 100%;
  width: 120px;
`;

export const NavActiveIcon = styled.img`
  display: block;
  margin-top: 12px;
  height: 25px;
  filter: invert(23%) sepia(51%) saturate(6610%) hue-rotate(218deg)
    brightness(99%) contrast(106%);
`;

export const NavInactiveIcon = styled.img`
  display: block;
  margin-top: 12px;
  height: 25px;
  filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(240deg)
    brightness(107%) contrast(101%);
`;

export const NavActiveSquare = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  margin: 40px auto 0 auto;
  background-color: #fff;
  border-radius: 15px;
  justify-content: center;
`;

export const NavInactiveSquare = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  margin: 40px auto 0 auto;
  background-color: #377afd;
  border-radius: 15px;
  justify-content: center;

  &:hover {
    background-color: #fff;
  }
  &:hover ${NavInactiveIcon} {
    filter: invert(23%) sepia(51%) saturate(6610%) hue-rotate(218deg)
      brightness(99%) contrast(106%);
  }
`;

export const NavIcon = styled.img`
  display: block;
  margin: 40px auto 0 auto;
  height: 50px;
  width: 50px;
`;

export const NavIconBottomInactive = styled.img`
  display: block;
  margin-top: 10px;
  height: 25px;
  filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(240deg)
    brightness(107%) contrast(101%);
`;

export const NavIconBottomSquare = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  margin: 90px auto 0 auto;
  background-color: #0559fd;
  border-radius: 15px;
  justify-content: center;
  border: solid;
  border-width: 2px;
  border-color: #377afd;

  &:hover {
    background-color: #fff;
  }
  &:hover ${NavIconBottomInactive} {
    filter: invert(23%) sepia(51%) saturate(6610%) hue-rotate(218deg)
      brightness(99%) contrast(106%);
  }
`;

export const NavIconBottomActive = styled.img`
  display: block;
  margin-top: 10px;
  height: 25px;
  filter: invert(23%) sepia(51%) saturate(6610%) hue-rotate(218deg)
    brightness(99%) contrast(106%);
`;

export const NavIconBottom = styled.img`
  display: block;
  margin: 80px auto 0 auto;
  height: 50px;
  width: 50px;
`;

export const AuthButtonDiv = styled.div``;

export const AuthButton = styled.button`
  display: block;
  margin: 40px auto 0 auto;
  background-color: #53d769;
  border: none;
  color: #fff;
  height: 40px;
  width: 90px;
  position: relative;
  border-radius: 10px;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    background-color: #9cd9a6;
  }
`;

///// Main Styles /////

export const MainColumn = styled.div`
  grid-area: nav;
  background-color: #0559fd;
  min-height: 100vh;
`;

//// Other ////

export const JoinButton = styled(Button)``;
