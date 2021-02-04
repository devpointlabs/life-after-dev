import { Button } from "semantic-ui-react";
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
  color: #000;
  &:focus {
    outline: none !important;
  }
  &:focus::placeholder {
    color: #d9d9d9;
  }
  &::placeholder {
    color: #868686;
  }
`;

export const SearchIcon = styled.img`
  position: relative;
  float: left;
  top: -38px;
  left: 25px;
  filter: opacity(60%);
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
  height: 274px;
  padding: 2rem 0 2rem;

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
  background-color: #42a5f5;
  border-radius: 10px;
  border: none;
  color: white;
  padding: 0px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  height: 40px;
  display: inline-block;

  margin: 15px 20px;
  outline: none;
`;

export const SiteInfoContainer = styled.div`
  background-color: white;
  border-style: ridge;
  border-color: #9dbcd4;
  text-align: center;
  width: 840px;
  height: 100%;
  border-radius: 15px;
  padding: 30px 40px;
  font-size: 16px;
  border-width: 2px;
  font-family: SFDisplay;

  margin-right: 20px;
`;

export const SiteInfoRegisterButton = styled.button`
  background-color: #42a5f5;
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
  font-family: SFDisplay;
`;

export const CardWrapper = styled.div`
  display: flex;
  background-color: #ffffff;
  overflow: hidden;
  border: solid;
  border-color: #b8b8b8;
  border-width: 3px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 18px;
  font-family: SFDisplay;
  margin-top: 40px;
  border-style: hidden;
`;

export const UserPic = styled.img`
  border-radius: 15px;
  height: 60px;
  width: 60px;
  margin: 28px 0px 0px 28px;
  display: flex;
  flex-direction: row;
  object-fit: cover;
`;

export const CardHeader = styled.header`
  display: flex;
`;

export const CardHeading = styled.span`
  color: black;
  font-weight: 900;
  font-size: 14px;
  display: flex;
  padding: 45px 0px 0px 10px;
  margin-top: 0;
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
  padding-top: 65px;
`;

export const ProjectDescrip = styled.div`
  color: #ffffff;
  padding: 25px;
`;

export const FeedBackButton = styled.button`
  background-color: #53d769;
  border-radius: 10px;
  border: none;
  color: white;
  margin: 10px auto;
  font-size: 16px;
  cursor: pointer;
  height: 60px;
  outline: none;
  width: 170px;
`;

export const ContributorWrapper = styled.div`
  display: flex;
  color: grey;
  padding: 0px 0px 25px 20px;
  align-items: center;
`;

export const ContributorImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 25px;
  width: 25px;
  border-radius: 10px;
  margin: 3px;
`;

export const Left = styled.div`
  width: 100%;
`;
export const Right = styled.div`
  flex-grow: 2;
  flex-shrink: 0;
  background: #2a2d34;

  width: 320px;
  min-height: 100%;
  border-radius: 21px;
  display: flex;
  text-align: center;
  flex-direction: column;
`;

export const LandingCommentsWrap = styled.span`
  display: flex;
  margin-left: 32px;
`;

export const SeeMoreComments = styled.div`
  color: grey;
  font-weight: bold;
  font-size: 18px;
  margin: 30px 0px 10px 32px;
  display: flex;
`;

export const LandingCardIcon = styled.img`
  height: 15px;
  width: 15px;
  margin-right: 7px;
  margin-top: 5px;
`;

export const SearchCreateButton = styled(Button)`
  background-color: #53d769 !important;
  padding: 15px !important;
  border-radius: 10px !important;
  color: #fff !important;
`;
