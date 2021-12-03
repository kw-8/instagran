import React from "react";
import { Link } from "react-router-dom";

class Account extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    if (this.props.user)
    this.props.getUser(this.props.userId)
  }
  render() {
    if (!this.props.users[this.props.userId]) return 'User Not Found';

    const { user } = this.props;
    return (
      <div>
        <Link to={`/users/${user.id}`}>
          <img className='profile-picture' src='' />
          <p className='username'> {user.username} </p>
        </Link>
      </div>
    )
  }
}