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
import NewPostContainer from "./posts/new_post_container";

const App = () => (
  <div>
    <AuthRoute exact path="/" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />

    <ProtectedRoute exact path="/explore" component={NavBarContainer} />
    <ProtectedRoute exact path="/explore" component={NewPostContainer} />
    <ProtectedRoute path="/explore" component={ExploreContainer} />

    <ProtectedRoute exact path="/users/:userId" component={NavBarContainer} />

    <Route exact path="/posts/:postId" component={NavBarContainer} />
    <Route exact path="/posts/:postId" component={PostContainer} />
  </div>
);

export default App;