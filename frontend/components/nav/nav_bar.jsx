import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.showCreatePost = this.showCreatePost.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  showCreatePost(e) {
    e.preventDefault()
    document.querySelector('.new_post').setAttribute('style', 'visibility: visible');
    console.log('change')
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
              <button onClick={this.showCreatePost}>Post</button>
              <button onClick={this.handleLogout}>Logout</button>
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