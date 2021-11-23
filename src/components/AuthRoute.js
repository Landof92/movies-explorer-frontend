import React from "react";
import { Route, Redirect } from "react-router-dom";

function AuthRoute(props) {
  return (
    <Route>
      {() => (props.loggedIn ? props.children : <Redirect to="/movies" />)}
    </Route>
  );
}

export default AuthRoute;
