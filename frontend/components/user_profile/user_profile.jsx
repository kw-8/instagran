import React from "react";
import ProfileHeaderContainer from "./profile_header_container";
import ProfileGridContainer from './profile_grid_container'
import { getUser } from "../../util/session_api_util";

// get user, user's posts
class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let {getUser, userId} = this.props;
    getUser(userId)
  }

  componentDidUpdate(prevProps) { // when userId changed in search bar
    let { getUser, userId } = this.props;
    if (userId !== prevProps.userId) getUser(userId);
  }

  render() {
    let { userId, users } = this.props
    if (!users[userId]) return null;
    return (
      <div className="user-profile">
        <ProfileHeaderContainer userId={userId} user={users[userId]} />
        <ProfileGridContainer posts={users[userId]['posts']} />
      </div>
    )
  }
}

export default UserProfile;