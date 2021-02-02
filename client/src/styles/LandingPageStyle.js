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



export const LandingInfoWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const LoginContainer = styled.div`
  background-color: white;
  border-style: ridge;
  border-color: #9dbcd4;
  text-align: center;
  width: 300px;
  height: 250px;

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
  border-radius: 15px;
  padding-top: 38px;
  font-size: 16px;
  border-width: 2px;
  
  margin-right: 20px;
  
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
display: flex;
background-color: #ffffff;
overflow: hidden;
border: solid;
border-color: #B8B8B8;;
border-width: 3px;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
border-radius: 18px;
margin-top: 20px;

`;

export const UserPic = styled.img`
  border-radius: 15px;
  height: 60px;
  width: 60px;
  margin: 28px 28px;
  display: flex;
 
  
`;


export const CardHeader = styled.header`
  display: flex;

 `;

export const CardHeading = styled.span`
  color: black;
  font-weight: 900;
  font-size: 14px;
  display: flex;
  margin: auto 100px ;
 
`;




export const CardImage = styled.img`
  display: flex;
  height: 130px;
  width: 780px;
  object-fit: cover;
  border-radius: 10px;
  margin-left: 32px;
  margin-right: 32px;
  /* float: left; */
 
`;

export const ContributorSection = styled.div`
font-weight: 900;
font-size: 14px;
width: 780px;
float: left;

  
`;

export const ProjectTitle = styled.div`
color: #ffffff;
font-weight: bold;
font-size: 23px;
padding-top: 55px;


`;

export const ProjectDescrip = styled.div`
color: #ffffff;
padding-top: 20px;


`;
export const JoinButton = styled.button`
background-color: #42A5F5; 
border-radius: 10px;
border: none;
border-width: 3px;
color: white;
text-align: center;
text-decoration: none;
font-size: 16px;
cursor: pointer;
height: 40px;

outline: none;
margin-top: 20px;

`;

export const ContributorWrapper = styled.div`
  display: flex;

`

export const ContributorImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 25px;
  width: 25px;
  border-radius:  10px;
  margin: 3px;

`

export const Left = styled.div`
  width: 100%;
`
export const Right = styled.div`
  background: #2a2d34;
  width: 390px;
  height: 430px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  text-align: center;

`


export const LandingCommentsWrap = styled.div`
  display: flex;
  margin-left: 32px;
`;