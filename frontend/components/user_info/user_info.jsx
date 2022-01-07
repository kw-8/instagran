import React from "react";
import { Link } from "react-router-dom";

class UserInfo extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    const { userId, users, getUser } = this.props;
    if (!users[userId]) getUser(userId)
  }
  render() {
    const { userId, users } = this.props;
    if (!users[userId]) return null
    return (
      <Link to={`/user/${userId}`} className="user-link bold-link" >{users[userId].username}</Link>
    )
  }
}

export default UserInfo;