import React from "react";
import {
  useRouteMatch,
  Route
} from "react-router-dom"
import {
  AuthRoute,
  ProtectedRoute
} from "../util/route";

import LoginFormContainer from '../components/session/login_container'
import SignupFormContainer from '../components/session/signup_container'
import NavBarContainer from "./nav/nav_bar_container";
import ExploreContainer from "./session/explore_container";
import PostContainer from "./posts/post_container";

const App = () => (
  <div>
    <AuthRoute exact path="/" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/" component={NavBarContainer} />
    <ProtectedRoute path="/explore" component={ExploreContainer} />
    <Route exact path="/posts/:postId" component={PostContainer} />
  </div>
);

export default App;