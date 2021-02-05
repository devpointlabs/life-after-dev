import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  const handleRegister = async (user, history, setLoader) => {
    try {
      setLoading(true);
      setAuthError(null);
      let res = await axios.post("/api/auth", user);
      setLoading(false);
      setUser(res.data.data);
      history.push("/");
    } catch (err) {
      console.log(err);
      setAuthError(err.response.data.errors.full_messages);
      setLoading(false);
    }
  };

  const handleLogin = async (user, history) => {
    try {
      setLoading(true);
      setAuthError(null);
      let res = await axios.post("/api/auth/sign_in", user);
      setLoading(false);
      setUser(res.data.data);
      history.push("/");
      console.log(res.data.data.email);
    } catch (err) {
      console.log(err);
      setLoading(false);
      // setAuthError(err.response.data.errors);
    }
  };

  const handleLogout = async (history) => {
    try {
      await axios.delete("/api/auth/sign_out");
      setUser(null);
      history.push("/");
    } catch (err) {
      console.log(err);
      alert("Logout Error. Debug.");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user !== null,
        handleRegister: handleRegister,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
        authError: authError,
        setAuthError: setAuthError,
        setUser: (user) => setUser(user),
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
