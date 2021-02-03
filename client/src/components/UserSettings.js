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
} from "../styles/UserSettingsStyle";
import ProfilePicSetting from "./ProfilePicSetting";

const UserSettings = ({ match, history }) => {
  const [userData, setUserData] = useState([]);
  const { user } = useContext(AuthContext);
  const [seen, setSeen] = useState(false);

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
    Axios.patch(`/api/users/${user.id}`, userData)
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
    <Wrapper>
      <FormDiv>
        {seen ? (
          <ProfilePicSetting toggle={togglePic} user={user} history={history} />
        ) : null}
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
      </UserInfoDiv>
    </Wrapper>
  );
};

export default UserSettings;
