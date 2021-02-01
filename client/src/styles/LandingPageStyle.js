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

//// Search Results ////
export const ResultsCard = styled.div`
  width: 480px;
  background: #ffffff;
  border: solid;
  border-width: 2px;
  border-color: #e2e2e5;
  border-radius: 12px;
  margin-bottom: 15px;
  display: flex;
`;

export const ResultsTitle = styled.div`
  color: #000000;
  font-size: 16px;
  margin: 10px;
  font-weight: 900;
`;

export const ResultsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultsDescription = styled.div`
  color: #8e8e8e;
  font-weight: 900;
  margin: 10px;
`;

export const ResultsImage = styled.img`
  width: 100px;
  height: 75px;
  object-fit: cover;
  border-radius: 10px;
  margin: 20px;
`;

//// Landing Project Card ////

export const LoginContainer = styled.div`
  background-color: white;
  border-style: ridge;
  border-color: #9dbcd4;
  text-align: center;
  width: 300px;
  height: 250px;
  float: right;
  border-radius: 15px;
  border-width: 2px;
`;

export const Input = styled.input`
  padding: 13px;
	color: none;
	background: white;
  border: solid;
  border-color: grey;
  border-width: 2px;
	border-radius: 10px;
	width: 80%;
  margin: 8px;
  outline: none;
`;

export const LandingLoginForm = styled.form`
  margin: 20px 0;
`;

export const LogInButton = styled.button`
background-color: #42A5F5; 
border-radius: 10px;
border: none;
color: white;
padding: 0 32px;
text-align: center;
text-decoration: none;
font-size: 16px;
cursor: pointer;
height: 40px;
display: inline-block;
float: right;
margin: 0 20px;
outline: none;
`;


export const SiteInfoContainer = styled.div`
  background-color: white;
  border-style: ridge;
  border-color: #9dbcd4;
  text-align: center;
  width: 840px;
  height: 250px;
  float: left;
  border-radius: 15px;
  padding-top: 38px;
  font-size: 16px;
  border-width: 2px;
  margin-bottom: 40px;
`;

export const SiteInfoRegisterButton = styled.button`
background-color: #42A5F5; 
border-radius: 10px;
border: none;
border-width: 3px;
color: white;
padding: 0 32px;
text-align: center;
text-decoration: none;
font-size: 16px;
cursor: pointer;
height: 40px;
display: inline-block;
outline: none;
`;

export const CardWrapper = styled.div`
  position: relative;
  background-color: white;
  overflow: hidden;
  border: solid;
  border-color: #B8B8B8;;
  border-width: 3px;
  width: 100%;
  height: 480px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 18px;
  margin-top 20px;

`;

export const UserPic = styled.img`
  border-radius: 15px;
  height: 60px;
  width: 60px;
  margin: 0 32px;
  float: left;
 
  
`;


export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  width: 780px;
  float: left;
 
 
`;

export const CardHeading = styled.span`
  padding: 18px 0px 0px 0px;
  font-weight: 900;
  font-size: 14px;
  float: left;
 
  
 
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
  height: 130px;
  width: 780px;
  object-fit: cover;
  border-radius: 10px;
  margin-left: 32px;
  margin-right: 32px;
  float: left;
 
`;

export const ContributorSection = styled.div`
font-weight: 900;
font-size: 14px;
width: 780px;
float: left;

  
`;

export const JoinButton = styled.button`
background-color: #555555; 
border-radius: 10px;
color: white;
text-align: center;
text-decoration: none;
font-size: 16px;
cursor: pointer;
height: 40px;
outline: none;




`;

export const JoinDiv = styled.div`
width: 300px;
height: 420px;
background-color: black;
float: right;
display: flex;
border-radius: 20px;

`;


// export const CardComments = styled.div`
// display: flex;
// height: 180px;
// width: 100%;
// border-radius: 3px;
// margin-left: 32px;
// margin-right: 32px;
// `;

export const CommentInputStyle = styled.div`
padding-right: 32px;
padding-left: 32px;
`;
