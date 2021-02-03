import { Button, Form } from "semantic-ui-react";
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

//// Form Section ////
export const FormDiv = styled.div`
  width: 55%;
`;

export const HeaderDiv = styled.div`
  margin: 60px 0px 60px 0px;
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
  margin: 20px 0px 0px 30px;
`;

export const ProfilePicText = styled.h2`
  font-size: 16px;
  font-weight: 900;
  color: #8f9096;
  margin-bottom: 20px;
`;

export const EditPicButton = styled(Button)`
  color: #fff !important;
  background-color: #53d769 !important;
  padding: 20px 55px 20px 55px !important;
  border-radius: 12px !important;
`;

export const FormField = styled(Form)`
  &::label {
    color: red;
  }
`;
