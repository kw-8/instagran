import React from "react";

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() { }

  render() {
    let {currentUser, user, userId} = this.props;
    return (
      <div className="profile-header">
        <div className="pfp">
          pfp
        </div>
        <div className="user-info">{user.username}</div>
        <div className="user-stats">
          user stats
        </div>
        <div className="user-text">placeholder text
          <div className="user-title">{user.title}</div>
          <div className="user-description">{user.description}</div>
      </div>
      </div>
    )
  }
}

export default ProfileHeader