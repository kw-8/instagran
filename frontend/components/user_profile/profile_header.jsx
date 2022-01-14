import React from "react";
import FollowButtonContainer from "../user_info/follow_button_container";

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.user;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentDidMount() { }

  toggleEdit() {
    let profileForm = document.querySelector(`.profile-form`);
    if (profileForm.style['visibility'] && profileForm.style['visibility'] === "hidden") {
      profileForm.setAttribute('style', 'visibility: visible');
    } else {
      profileForm.setAttribute('style', 'visibility: hidden');
    }
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData();
    // formData.append('id', this.props.currentUserId);
    formData.append('user[id]', this.props.currentUserId);
    formData.append('user[username]', this.props.user.username);
    formData.append('user[description]', this.state.description);
    formData.append('user[full_name]', this.state.title);
    formData.append('user[profile_picture]', this.state.profile_picture);
    this.props.updateUser(formData);
    this.toggleEdit();
  }

  render() {
    let {user, userId, currentUserId, follows} = this.props;
    if (!user.posts) return null
    return (
      <>
      <div className="profile-header">
        <div className="pfp">
          {user.profilePictureUrl ?
            <img src={user.profilePictureUrl} />
            : ""}
        </div>
        <div className="user-info">
          <p>{user.username}</p>
          {userId == currentUserId ?
          <button onClick={this.toggleEdit}>Edit</button>
          :<FollowButtonContainer userId={userId}></FollowButtonContainer>
          }
        </div>
        <div className="user-stats">
          <p><span>{user.posts.length}</span> posts</p>
          <p><span>{follows}</span> followers</p>
          <p><span>{user.following.length}</span> following</p>
        </div>
        <div className="user-text">
          <div className="user-title">{user.title}</div>
          <div className="user-description">{user.description}</div>
        </div>
      </div>
      <form className="profile-form">
        <input
          type="file"
          onChange={e => this.setState({ profile_picture: e.target.files[0] })}
        />
        <input type="text"
          id="user-title"
          placeholder="Add a title"
          value={user.title}
          onChange={this.update('title')} />
        <textarea
          id="user-description"
          placeholder="Add a description"
          value={user.description || ''}
          onChange={this.update('description')} />
        <button onClick={this.handleSubmit}>Update</button>
        <button onClick={this.toggleEdit}>Cancel</button>
      </form>
      </>
    )
  }
}

export default ProfileHeader