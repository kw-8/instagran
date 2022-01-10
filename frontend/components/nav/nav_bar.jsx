import React from "react";
import { Link } from "react-router-dom";
import UserPfpContainer from "../user_info/user_pfp_container";

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
    if (menu.style['visibility'] && menu.style['visibility'] === "hidden") {
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
    let {currentUser} = this.props

    return (
      <div id='nav-bar'>
        <h1 className='logo'><Link to='/'>Instagran</Link></h1>
        <div id='nav-links'>
          {currentUser != null ?
            <>
              <Link to='/explore'>
                <img src="assets/home.png"/>
              </Link>
              <a onClick={this.showCreatePost}>
                <img src="assets/post.png"/>
              </a>
              <div className="nav-dropdown-container">
                <div className="nav-user-icon">
                  <div className="profile-picture" onClick={this.toggleNavMenu}>
                    <UserPfpContainer userId={currentUser.id} />
                  </div>
                  <div className="nav-dropdown-menu dropdown">
                    <Link to={`/user/${currentUser.id}`}>Profile</Link>
                    <a onClick={this.handleLogout}>Logout</a>
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