import styled from "styled-components";

export const ModuleContainer = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 40px 0px 0px 0px;
`;

export const ModuleTitle = styled.div`
  padding: 58px 0px 10px 20px;
  font-weight: 900;
  font-size: 14px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 780px;
  background: #ffffff;
`;

export const CardRow = styled.div`
  width: 780px;
  justify-content: space-evenly;
`;

export const CardCol = styled.div`
  width: 330px;
`;

export const CardContainer = styled.div`
  width: 330px;
  border: solid;
  border-color: #e2e2e5;
  border-width: 2px;
  border-radius: 12px;
  margin: 42px 0px 40px 0px;
`;

export const UserPic = styled.img`
  border-radius: 15px;
  height: 50px;
  width: 50px;
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 30px;
`;

export const UserName = styled.span`
  margin: 10px 0px 0px 10px;
  font-weight: 900;
  font-size: 14px;
`;

export const CrudIcon = styled.div`
  margin-left: auto;
  margin-top: 5px;
  align-self: end;
`;

export const CardDiv = styled.div`
  display: flex;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
`;

export const ProjectPic = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ActiveDotOne = styled.div`
  height: 5px;
  width: 5px;
  background-color: #000000;
  border-radius: 50%;
  display: inline-block;
  margin-left: 45px;
  margin-bottom: 3px;
`;

export const ActiveDotTwo = styled.div`
  height: 5px;
  width: 5px;
  background-color: #000000;
  border-radius: 50%;
  display: inline-block;
  margin-left: 113px;
  margin-bottom: 3px;
`;

export const ProjectTitle = styled.h3`
  color: #000000;
  font-weight: 900;
  font-size: 16px;
`;
