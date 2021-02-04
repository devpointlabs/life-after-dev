import { Button, Form, Icon, Input } from "semantic-ui-react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1160px;
  display: flex;
`;
//// User Info Section
export const UserInfoDiv = styled.div`
  background-color: #1e1f20;
  width: 35%;
  height: 100%;
  position: fixed;
  right: 0%;
  border-radius: 35px 0px 0px 0px;
`;

export const UserPic = styled.img`
  border-radius: 16px;
  object-fit: cover;
  width: 50px;
  height: 50px;
  margin: 40px 0px 0px 415px;
`;

export const SettingsHeader = styled.h2`
  color: #fff;
  font-weight: 900;
  margin: 40px 20px 0px 50px;
`;

export const IconSquareWhite = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  margin: 0px 0px 0px 50px;
  background-color: #fff;
  border-radius: 15px;
  justify-content: center;
`;

export const IconSquareBlack = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  margin: 0px 0px 0px 50px;
  background-color: #1e1f20;
  border-radius: 15px;
  justify-content: center;
  border: solid;
  border-width: 2px;
  border-color: #868686;
`;

export const IconBlack = styled.img`
  display: block;
  margin-top: 12px;
  height: 25px;
  /* filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(240deg)
    brightness(107%) contrast(101%); */
`;

export const IconWhite = styled.img`
  display: block;
  margin-top: 10px;
  height: 25px;
  filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(240deg)
    brightness(107%) contrast(101%);
`;

export const SettingsRow = styled.div`
  display: flex;
  margin-top: 40px;
`;

//// Form Section ////
export const FormDiv = styled.div`
  width: 55%;
  margin-bottom: 60px;
`;

export const HeaderDiv = styled.div`
  margin: 50px 0px 60px 0px;
`;

export const PageHeader = styled.h1`
  font-size: 22px;
  font-weight: 900;
`;

export const SubHeadDiv = styled.div`
  display: flex;
`;

export const ProfilePicDiv = styled.div``;

export const ProfilePicEditDiv = styled.div`
  margin: 15px 0px 50px 30px;
`;

export const ProfilePicText = styled.h2`
  font-size: 16px;
  font-weight: 900;
  color: #8f9096;
  margin-bottom: 15px;
`;

export const EditPicButton = styled(Button)`
  color: #fff !important;
  background-color: #53d769 !important;
  padding: 15px 50px 15px 50px !important;
  border-radius: 12px !important;
`;

export const SaveProfileButton = styled(Button)`
  color: #fff !important;
  background-color: #53d769 !important;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const FormField = styled(Form)`
  border: 0 !important;
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

export const CamIcon = styled(Icon)`
  padding-bottom: 25px !important;
`;
