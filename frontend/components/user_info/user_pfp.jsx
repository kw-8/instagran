import React from "react";

class UserProfilePic extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    if (!this.props.user) return null;
    const { user } = this.props;
    return (
      <div className="profile-picture">
        <img src='' />
      </div>
    )
  }
}

export default UserProfilePic;