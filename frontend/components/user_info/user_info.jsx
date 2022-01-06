import React from "react";
import { Link } from "react-router-dom";

class UserInfo extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <Link to={`/users/${user.id}`}>{user.username}</Link>
      </div>
    )
  }
}

export default UserInfo;