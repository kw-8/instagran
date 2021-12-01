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
    // e.preventDefault();
    // const post = Object.assign({}, this.state);
    // this.props.submitPost(post);

    e.preventDefault();
    const formData = new FormData();
    // console.log('HEY', this.state);
    const {id, posterId, description} = this.state;

    if (id) formData.append('post[id]', id);
    formData.append('post[poster_id]', posterId);
    formData.append('post[description]', description);
    if (this.state.images) {
      for (let i = 0; i < this.state.images.length; i++) {
        formData.append("post[images][]", this.state.images[i]);
      }
    }
    this.props.submitPost(formData)
  }

  render() {
    if (!this.state) {
      return null;
    }
    return (
      <div id='post-form'>
        <div>
          <h3>{this.props.postType === 'new_post' ? 'Create new post' : 'Edit post'}</h3>
          <form>
            <input
              type="file"
              onChange={e => this.setState({ images: e.target.files })}
              multiple
            />
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