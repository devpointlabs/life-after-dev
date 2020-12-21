import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Button, Form, Segment, Header } from "semantic-ui-react";

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({email,password}, props.history);
  }

  return (
    <Segment basic>
      <Header as="h1" textAlign="center">
        Login
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Email"
          autoFocus
          required
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Input
          label="Password"
          required
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Segment textAlign="center" basic>
          <Button primary type="submit">
            Submit
          </Button>
        </Segment>
      </Form>
    </Segment>
  )
}

export default Login;