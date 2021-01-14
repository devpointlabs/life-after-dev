import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Button, Form, Segment, Header } from "semantic-ui-react";
import { useFormInput } from "../hooks/useFormInput";

const Register = ({ history }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { handleRegister } = useContext(AuthContext);
  const email = useFormInput("", "Email");
  const password = useFormInput("", "Password");
  const passwordConfirmation = useFormInput("", "Password Confirmation");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.value === passwordConfirmation.value)
      handleRegister(
        {
          email: email.value,
          password: password.value,
          passwordConfirmation: passwordConfirmation.value,
        },
        history
      );
    else alert("Passwords Do Not Match!");
  };


  return (
    <Segment basic>
      <Header as="h1" textAlign="center">
        Register
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input autoFocus {...email} />
        <Form.Input type="password" {...password} />
        <Form.Input type="password" {...passwordConfirmation} />
        <Segment textAlign="center" basic>
          <Button
            primary
            type="submit"
          >
            Submit
          </Button>
        </Segment>
      </Form>
    </Segment>
  );
};

export default Register;