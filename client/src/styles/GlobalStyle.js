import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  background-color: #2959fd;
`;

export const AppGrid = styled.div`
  display: grid;
  width: 1440px;
  height: 100%;
  grid-template-areas: "nav main";
  grid-template-rows: fit-content(100%);
  grid-template-columns: 160px 1280px;
  margin: auto;
  background-color: #f7f7f7;
`;

export const NavColumn = styled.div`
  grid-area: nav;
  background-color: #2959fd;
  min-height: 100vh;
`;

export const Logo = styled.img`
  display: block;
  margin: 45px auto 90px auto;
`;

export const NavIcon = styled.img`
  display: block;
  margin: 40px auto 0 auto;
  height: 50px;
  width: 50px;
`;

export const NavIconBottom = styled.img`
  display: block;
  margin: 80px auto 0 auto;
  height: 50px;
  width: 50px;
`;

export const AuthButton = styled.button`
  display: block;
  margin: 40px auto 0 auto;
`;
