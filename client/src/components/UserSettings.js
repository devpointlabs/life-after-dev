import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Icon } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import {
  CamIcon,
  EditPicButton,
  FormDiv,
  FormField,
  HeaderDiv,
  IconSquareBlack,
  IconSquareWhite,
  IconBlack,
  IconWhite,
  PageHeader,
  ProfilePicDiv,
  ProfilePicEditDiv,
  ProfilePicText,
  SaveProfileButton,
  SettingsHeader,
  SubHeadDiv,
  UserInfoDiv,
  UserPic,
  Wrapper,
  SettingsRow,
  IconText,
} from "../styles/UserSettingsStyle";
import ProfilePicSetting from "./ProfilePicSetting";
import profileicon from "../icons/user2x.png";
import helpicon from "../icons/help2x.png";

const UserSettings = ({ match, history }) => {
  const [userData, setUserData] = useState([]);
  const { user } = useContext(AuthContext);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
   setUserData(user) 
  },[user])
 
  


  useEffect(() => {
    Axios.get(`/api/users/${user.id}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setUserData({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("submit clicked", userData);
    Axios.patch(`/api/users/${user?.id}`, userData)
      .then((res) => {
        history.push(`/user/${user.id}`);
        console.log("updated name", res);
      })
      .catch((err) => {
        console.log("user setting update error", err);
      });
  };

  const togglePic = () => {
    setSeen(!seen);
  };

  return (
    <>
      <Wrapper>
        {seen ? (
          <ProfilePicSetting toggle={togglePic} user={user} history={history} />
        ) : null}
        <FormDiv>
          <HeaderDiv>
            <PageHeader>Account Information</PageHeader>
          </HeaderDiv>
          <SubHeadDiv>
            <ProfilePicDiv>
              <img className="userpic" src={user?.image} />
            </ProfilePicDiv>
            <ProfilePicEditDiv>
              <ProfilePicText>Profile Picture</ProfilePicText>
              <EditPicButton onClick={togglePic}>
                <CamIcon
                  size="large"
                  name="camera retro"
                  style={{ paddingBottom: 10 }}
                />
                Replace
              </EditPicButton>
            </ProfilePicEditDiv>
          </SubHeadDiv>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              label="FIRST NAME"
              placeholder="First Name"
              name="firstname"
              value={userData.firstname}
              onChange={handleChange}
            />
            <Form.Input
              label="LAST NAME"
              placeholder="Last Name"
              name="lastname"
              value={userData.lastname}
              onChange={handleChange}
            />
            <Form.Input
              label="GITHUB LINK"
              placeholder="GitHub Link"
              name="github_link"
              value={userData.github_link}
              onChange={handleChange}
            />
            <Form.Input
              label="PERSONAL SITE "
              placeholder="Personal Site URL"
              name="personal_site"
              value={userData.personal_site}
              onChange={handleChange}
            />
            <Form.Input
              label="LINKEDIN"
              placeholder="Linkedin"
              name="linkedin_link"
              value={userData.linkedin_link}
              onChange={handleChange}
            />
            <Form.Input
              label="TAG"
              placeholder="Tag"
              name="tag"
              value={userData.tag}
              onChange={handleChange}
            />
            <SaveProfileButton>Save Profile</SaveProfileButton>
          </Form>
        </FormDiv>
        <UserInfoDiv>
          {user && (
            <Link to={`/user/${user.id}`}>
              <UserPic src={user.image} />
            </Link>
          )}
          <SettingsHeader>Settings</SettingsHeader>
          <SettingsRow>
            <IconSquareWhite>
              <IconBlack src={profileicon} />
            </IconSquareWhite>
            <IconText>My Account</IconText>
          </SettingsRow>
          <SettingsRow>
            <IconSquareBlack>
              <IconWhite src={helpicon} />
            </IconSquareBlack>
            <IconText>Help</IconText>
          </SettingsRow>
        </UserInfoDiv>
      </Wrapper>
    </>
  );
};

export default UserSettings;
