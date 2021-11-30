import React from "react";

class PostForm extends React.Component {
  constructor(props){
    super(props);
    
    this.state = this.props.post;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.submitPost(post);
  }

  render() {
    return (
      <div id='post-form'>
        <div>
          <h3>{this.props.postType === 'new_post' ? 'Create new post' : 'Edit post'}</h3>
          <form>
            <input id="description" type="text" placeholder="Add a caption" onChange={this.update('description')} />
            <br />
            <button onClick={this.handleSubmit}>Post</button>
          </form>
        </div>
      </div>
    )
  }
}
export default PostForm;