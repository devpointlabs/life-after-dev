import Axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

const UserSettings = ({ match }) => {
  console.log(match);
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

  return (
    <div>
      <h1>User Settings</h1>
      <div>
        <Form.Input
          label="First Name"
          placeholder="First Name"
          name="firstname"
          value={userData.firstname}
        />
        <Form.Input
          label="Last Name"
          placeholder="Last Name"
          name="firstname"
          value={userData.firstname}
        />
        <Form.Input
          label="First Name"
          placeholder="First Name"
          name="firstname"
          value={userData.firstname}
        />
        <Form.Input
          label="First Name"
          placeholder="First Name"
          name="firstname"
          value={userData.firstname}
        />
      </div>
    </div>
  );
};

export default UserSettings;
