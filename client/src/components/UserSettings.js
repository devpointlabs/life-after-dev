import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import ProfilePicSetting from "./ProfilePicSetting";

const UserSettings = ({ match, history }) => {
  const [userData, setUserData] = useState([]);
  const { user } = useContext(AuthContext)
  const [seen, setSeen] = useState(false)

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
    setSeen(!seen)
  }

  return (
    <div>
      {seen ? <ProfilePicSetting toggle = {togglePic} user = {user} history = {history}/> : null}
      <h1>User Settings</h1>
      <div>
        <img className="userpic" src={user.image} />
        <Button onClick={togglePic}>
          Edit Picture
        </Button>
      </div>
      <Form onSubmit={handleSubmit}>
        <Button>Save Profile</Button>
        <br />
        <br />
        <Form.Input
          label="First Name"
          placeholder="First Name"
          name="firstname"
          value={userData.firstname}
          onChange={handleChange}
        />
        <Form.Input
          label="Last Name"
          placeholder="Last Name"
          name="lastname"
          value={userData.lastname}
          onChange={handleChange}
        />
        {/* <Form.Input
          label="Image"
          placeholder="Image"
          name="image"
          value={userData.image}
          onChange={handleChange}
        /> */}
        <Form.Input
          label="GitHub"
          placeholder="GitHub Link"
          name="github_link"
          value={userData.github_link}
          onChange={handleChange}
        />
        <Form.Input
          label="Personal Site"
          placeholder="Personal Site URL"
          name="personal_site"
          value={userData.personal_site}
          onChange={handleChange}
        />
        <Form.Input
          label="Linkedin"
          placeholder="Linkedin"
          name="linkedin_link"
          value={userData.linkedin_link}
          onChange={handleChange}
        />
        <Form.Input
          label="Tag"
          placeholder="Tag"
          name="tag"
          value={userData.tag}
          onChange={handleChange}
        />
      </Form>
    </div>
  );
};

export default UserSettings;
