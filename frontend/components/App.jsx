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
import EditPostContainer from "./posts/edit_post_container";
import UserProfileContainer from "./user_profile/user_profile_container";

const App = () => (
  <div>
    <AuthRoute exact path="/" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />

    {/* IF LOGGED IN */}
    <ProtectedRoute path="/" component={NavBarContainer} />
    <ProtectedRoute path="/" component={NewPostContainer} />
    
    <ProtectedRoute exact path="/explore" component={ExploreContainer} />


    <ProtectedRoute exact path="/posts/:postId" component={EditPostContainer} />
    
    <Route exact path="/user/:userId" component={UserProfileContainer} />
    <Route exact path="/posts/:postId" component={PostContainer} />
  </div>
);

export default App;