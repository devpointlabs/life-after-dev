
import React, { Component, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const ProtectedRoute = ({ component: Component, ...rest}) => {
  const { authenticated } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={(props)=>
      authenticated ? (<Component {...props}/>) 
        : <Redirect 
            to={{
              pathname: "/login", 
              state: { from: props.location}
            }
          }/>
    }/>
  )
}

export default ProtectedRoute