import Axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";

const UserSettings = ({ match, history }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Axios.get(`/api/user/${match.params.id}/profile/settings`)
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setUserData({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("submit clicked");
    Axios.patch(`/api/users/${match.params.id}`, userData).then((res) => {
      history.push(`/user/${match.params.id}`);
      console.log("updated name", res);
    });
  };

  return (
    <div>
      <h1>User Settings</h1>
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
        <Form.Input
          label="Image"
          placeholder="Image"
          name="image"
          value={userData.image}
          onChange={handleChange}
        />
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
