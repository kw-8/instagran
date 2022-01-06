import React from "react";

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentDidMount() { }

  toggleEdit() {}

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  handleSubmit(e) {}

  render() {
    let {currentUser, user, userId} = this.props;
    if (!user.posts) return null
    return (
      <div className="profile-header">
        <div className="pfp">
          pfp
        </div>
        <div className="user-info">{user.username}</div>
        <div className="user-stats">
          <p><span>{user.posts.length}</span> posts</p>
          <p><span>{user.followers}</span> followers</p>
          <p><span>{user.following}</span> following</p>
        </div>
        <div className="user-text">description placeholder
          <div className="user-title">{user.title}</div>
          <div className="user-description">{user.description}</div>
        </div>
        <form className="profile-form">
          <input type="text"
            id="user-title"
            placeholder="Add a title"
            value={user.title}
            onChange={this.update('user-title')} />
          <textarea
            id="user-description"
            placeholder="Add a description"
            value={user.description}
            onChange={this.update('user-description')} />
        </form>
      </div>
    )
  }
}

export default ProfileHeader