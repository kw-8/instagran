import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleNavMenu = this.toggleNavMenu.bind(this);
    this.showCreatePost = this.showCreatePost.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  toggleNavMenu(e) {
    e.preventDefault()
    let menu = document.querySelector('.nav-dropdown-menu');
    if (menu.style['visibility'] === "hidden") {
      menu.setAttribute('style', 'visibility: visible');
    } else {
      menu.setAttribute('style', 'visibility: hidden');
    }
  }

  showCreatePost(e) {
    e.preventDefault()
    document.querySelector('.new_post').setAttribute('style', 'visibility: visible');
  }

  render() {// fix cond
    let un = (this.props.currentUser) ? this.props.currentUser.username : null;

    return (
      <div id='nav-bar'>
        <h1 className='logo'><Link to='/'>Instagran</Link></h1>
        <div id='nav-links'>
          {un != null ?
            <>
              <h3>{un}</h3>
              <Link to='/explore'>Home</Link>
              <a onClick={this.showCreatePost}>Post</a>
              <div className="nav-dropdown-container">
                <div className="nav-user-icon">
                  <div onClick={this.toggleNavMenu}></div>
                  <div className="nav-dropdown-menu">
                    <Link to={`/user/${this.props.currentUser.id}`}>Profile</Link>
                    <button onClick={this.handleLogout}>Logout</button>
                  </div>
                </div>
              </div>
            </>
          :
            <>
              <Link to='/' className='nav-login'>Login</Link>
              <Link to='/signup' className='nav-signup'>Sign Up</Link>
            </>
          }
        </div>
      </div>
    )
  }
}

export default NavBar;