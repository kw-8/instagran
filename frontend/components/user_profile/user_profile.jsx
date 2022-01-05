import React from "react";
import ProfileHeaderContainer from "./profile_header_container";
import ProfileGridContainer from './profile_grid_container'

// get user, user's posts
class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // debugger
    let { userId, users, getUser } = this.props
    if (!users[userId]) getUser(userId)
  }

  render() {
    // debugger
    let { userId, users } = this.props
    if (!users[userId]) return null;
    return (
      <div className="user-profile">
        <ProfileHeaderContainer />
        <ProfileGridContainer />
      </div>
    )
  }
}

export default UserProfile;