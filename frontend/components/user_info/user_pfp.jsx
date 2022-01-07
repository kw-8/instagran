import React from "react";

class UserProfilePic extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { userId, users, getUser } = this.props;
    if (!users[userId]) {
      console.log('getting user for pfp')
      getUser(userId)
    }
  }
  render() {
    if (!this.props.userId) return null;
    const { userId } = this.props;
    return (
      <div className="profile-picture">
        {/* <img src='' /> */}
      </div>
    )
  }
}

export default UserProfilePic;