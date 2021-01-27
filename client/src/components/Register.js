import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Button, Form, Segment, Header } from "semantic-ui-react";
import { useFormInput } from "../hooks/useFormInput";
import { useDropzone } from "react-dropzone";

const Register = ({ history }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const firstname = useFormInput("", "First Name");
  const lastname = useFormInput("", "Last Name");
  const email = useFormInput("", "Email");
  const password = useFormInput("", "Password");
  const passwordConfirmation = useFormInput("", "Password Confirmation");
  const { handleRegister, loading, authError, setAuthError } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.value === passwordConfirmation.value)
      handleRegister(
        {
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          password: password.value,
          passwordConfirmation: passwordConfirmation.value,
        },
        history
      );
    else alert("Passwords Do Not Match or Must Be 8 Characters Long");
  };
  
  useEffect(() => {
    setAuthError(null);
  }, []);

  const checkAuthError = () => {
    if (authError) {
      return authError.map((err) => {
        return <p style={{ color: "red" }}>* {err}</p>;
      });
    }
  };

  return (
    <Segment basic>
      <Header as="h1" textAlign="center">
        Register
      </Header>
      {checkAuthError()}
      <Form onSubmit={handleSubmit}>
        <Form.Input autoFocus type="firstname" {...firstname} />
        <Form.Input type="lastname" {...lastname} />
        <Form.Input type="email" {...email} />
        <Form.Input type="password"  {...password} />
        <Form.Input type="password" {...passwordConfirmation} />
        <Segment textAlign="center" basic>
          <Button primary type="submit">
            Submit
          </Button>
        </Segment>
      </Form>
    </Segment>
  );
};

export default Register;
