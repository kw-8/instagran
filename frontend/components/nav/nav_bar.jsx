import React from "react";
import { Link } from "react-router-dom";
import UserPfpContainer from "../user_info/user_pfp_container";
import {
  setUpClickAway,
  removeClickAway
} from "../dropdown"

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
    if (!menu.style['visibility'] || menu.style['visibility'] === "hidden") {
      menu.setAttribute('style', 'visibility: visible');
      setUpClickAway('.profile-picture.dropdown-button img, .profile-picture.dropdown-button div', '.nav-dropdown-menu')
    } else {
      menu.setAttribute('style', 'visibility: hidden');
      removeClickAway('.profile-picture.dropdown-button img, .profile-picture.dropdown-button div', '.nav-dropdown-menu')
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
                <img src="https://instagran-seed.s3.us-west-1.amazonaws.com/home.png"/>
              </Link>
              <a onClick={this.showCreatePost}>
                <img src="https://instagran-seed.s3.us-west-1.amazonaws.com/post.png"/>
              </a>
              <div className="nav-dropdown-container">
                <div className="nav-user-icon">
                  <div className="profile-picture dropdown-button" onClick={this.toggleNavMenu}>
                    <UserPfpContainer userId={currentUser.id} />
                  </div>
                  <div className="nav-dropdown-menu dropdown">
                    <i className="fa fa-user-circle"></i>
                    <Link to={`/user/${currentUser.id}`}>Profile</Link>
                    <a href="https://www.linkedin.com/in/katherine-wu-ca/" target="_blank" rel="noopener noreferrer">
                      <ion-icon name="logo-linkedin"></ion-icon>
                      LinkedIn
                    </a>
                    <a href="https://github.com/kw-8" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github-alt"></i>
                      {/* <ion-icon name="logo-github"></ion-icon> */}
                      Github
                    </a>
                    <a href="https://angel.co/u/katherine-wu-18" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-angellist"></i>
                      Angellist
                    </a>
                    <a onClick={this.handleLogout}>
                      <ion-icon name="log-out-outline"></ion-icon>
                      Logout
                    </a>
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