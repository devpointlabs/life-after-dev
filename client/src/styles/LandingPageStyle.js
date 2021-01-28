import styled from "styled-components";

////// Search Bar Styles //////
export const SearchBarContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 30px;
`;

export const Search = styled.input`
  width: 100%;
  border: 0;
  height: 60px;
  border-radius: 12px;
  background-color: #ffffff;
  padding-left: 60px;
  font-color: #c5c6ce;
`;

export const SearchIcon = styled.img`
  position: relative;
  float: left;
  top: -38px;
  left: 25px;
`;

//// Landing Project Card ////


export const CardWrapper = styled.div`
  overflow: hidden;
  width: 800px;
  height: 600px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 18px;
`;

export const UserPic = styled.img`
  border-radius: 15px;
  height: 60px;
  width: 60px;
  margin: 0 32px;
  
`;


export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  width: 100%;
`;

export const CardHeading = styled.span`
  padding: 18px 0px 0px 0px;
  font-weight: 900;
  font-size: 14px;
  
 
`;

export const ProjectName = styled.div`
font-weight: 900;
font-size: 14px;
color: #B8B8B8;
padding-left: 40px;
padding-bottom: 5px;

`;


export const CardImage = styled.img`
  display: flex;
  height: 180px;
  width: 92%;
  object-fit: cover;
  border-radius: 10px;
  margin-left: 32px;
  margin-right: 32px;
 
`;

export const ContributorSection = styled.div`
padding-right: 32px;
padding-left: 32px;
font-weight: 900;
font-size: 14px;
 
  
`;

export const CardBody = styled.div`
padding-right: 32px;
padding-left: 32px;
`;


export const CardComments = styled.div`
  display: block;
  font-size: 12px;
  text-align: center;
`;

