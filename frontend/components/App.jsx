import React from "react";
import {
  Route
} from "react-router-dom"
import {
  AuthRoute,
  ProtectedRoute
} from "../util/route";

import LoginFormContainer from '../components/session/login_container'
import SignupFormContainer from '../components/session/signup_container'
import NavBarContainer from "./session/nav_bar_container";
import ExploreContainer from "./session/explore_container";

const App = () => (
  <div>
    <ProtectedRoute path="/" component={NavBarContainer} />
    <ProtectedRoute path="/explore" component={ExploreContainer} />
    <AuthRoute exact path="/" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;