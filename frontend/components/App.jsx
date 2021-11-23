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

    <h1>Instagran!!!</h1>
    {/* <Route path="/login" render={props => <LoginFormContainer {...props} />} />
    <Route path="/signup" render={props => <SignupFormContainer {...props} />} /> */}
    <AuthRoute exact path="/" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/" component={NavBarContainer} />
    <ProtectedRoute path="/explore" component={ExploreContainer} />
  </div>
);

export default App;