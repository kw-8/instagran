import React from "react";

class PostForm extends React.Component {
  constructor(props){
    super(props);
    
    this.state = this.props.post;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

componentDidMount() {
    if (!this.props.post) {
      this.props.getPost(this.props.match.params.postId)
        .then(() => this.setState(this.props.post))
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
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.submitPost(post);
  }

  render() {
    // debugger;
    if (!this.state) {
      return null;
    }
    return (
      <div id='post-form'>
        <div>
          <h3>{this.props.postType === 'new_post' ? 'Create new post' : 'Edit post'}</h3>
          <form>
            <textarea id="description" placeholder="Add a caption" value={this.state.description} onChange={this.update('description')} />
            <br />
            <button onClick={this.handleSubmit}>Post</button>
          </form>
        </div>
      </div>
    )
  }
}
export default PostForm;