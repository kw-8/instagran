import React from "react";
import { Link } from "react-router-dom";

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
          <Link to='/explore'>home</Link>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    )
  }
}

export default NavBar;