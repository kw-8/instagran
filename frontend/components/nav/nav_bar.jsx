import React from "react";
import { Link } from "react-router-dom";
import { Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../../util/route";

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    let un
    if (this.props.currentUser) {
      un = this.props.currentUser.username
    }
    else {
      un = 'null';
    }
    let buttons;
    if (un != 'null') {
      buttons = (
        <>
        <h3>{un}</h3>
        <Link to='/explore'>Home</Link>
        <button onClick={this.handleLogout}>Logout</button>
        </>
      )
    } else {
      <>
        <Link to='/'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
      </>
    }
    return (
      <div id='nav-bar'>
        <h1 className='logo'>Instagran</h1>
        <div id='nav-links'>
          {un != 'null' ?
            <>
              <h3>{un}</h3>
              <Link to='/explore'>Home</Link>
              <button onClick={this.handleLogout}>Logout</button>
            </>
          :
            <>
              <Link to='/'>Login</Link>
              <Link to='/signup'>Sign Up</Link>
            </>
          }
        </div>
      </div>
    )
  }
}

export default NavBar;