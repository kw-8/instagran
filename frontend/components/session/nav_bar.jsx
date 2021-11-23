import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div id='nav-bar'>
        <h1 className='logo'>Instagran</h1>
        <Link to='/explore'>home</Link>
      </div>
    )
  }
}

export default NavBar;