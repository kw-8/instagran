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
    return (
      <div id='nav-bar'>
        <h1 className='logo'>Instagran</h1>
        <div id='nav-links'>
        </div>
      </div>
    )
  }
}

export default NavBar;