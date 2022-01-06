import React from "react";

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.user;
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

  handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData();
    formData.append('user[id]', this.state.id);
    formData.append('user[username]', this.state.username);
    formData.append('user[description]', this.state.description);
    formData.append('user[full_name]', this.state.title);
    this.props.updateUser(formData)
  }

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
            onChange={this.update('title')} />
          <textarea
            id="user-description"
            placeholder="Add a description"
            value={user.description}
            onChange={this.update('description')} />
          <button onClick={this.handleSubmit}>Update</button>
        </form>
      </div>
    )
  }
}

export default ProfileHeader