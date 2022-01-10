import React from "react";

class UserProfilePic extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { userId, users, getUser } = this.props;
    if (!users[userId]) {
      getUser(userId)
    }
  }
  render() {
    const { users, userId } = this.props;
    const user = users[userId]
    if (!this.props.userId || !user) return null;
    return (
      <div className="profile-picture">
        {user.profilePictureUrl ?
          <img src={user.profilePictureUrl} />
          : ""}
      </div>
    )
  }
}

export default UserProfilePic;