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
  border-radius: 15px;
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
  padding: 0 0 32px;
  margin: 10px;
  width: 900px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
padding-right: 32px;
padding-left: 32px;
`;

// export const CardImage = styled.img`({
//   background-image: ${(props) => props.src};
//   background-repeat: no-repeat;
//   background-size: contain;
//   border: 1px solid red;
//   width: 100%;
//   height: 400px;
//   border-radius: 8px;
// object-fit: cover
// `;
// // export const CardImageWrap = styled.div`({
//   height: 20px;  
//   text-align: center;  
//   padding: 15px;  
//   border: 3px solid red;

// `;


export const CardComments = styled.h1`
  display: block;
  font-size: 12px;
  text-align: center;
`;


export const CardContributors = styled.h1`
  display: block;
  font-size: 12px;
  text-align: center;
`;