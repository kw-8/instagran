import React from "react";

class PostForm extends React.Component {
  constructor(props){
    super(props);
    
    this.state = this.props.post;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideForm = this.hideForm.bind(this);
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

    // use formdata to pass in files
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

  hideForm(postType) {
    // e.preventDefault();
    document.querySelector(`#post-form.${postType}`).setAttribute('style', 'visibility: hidden');
  }

  render() {
    if (!this.state) {
      return null;
    }
    let {postType} = this.props;
    return (
      <>
      { postType === 'new_post' || this.state.posterId === this.props.currentUserId ? (
        <div id='post-form' className={postType}>
          <div>
            <h3>{postType === 'new_post' ? 'Create new post' : 'Edit post'}</h3>
              <button className="close-div" onClick={() => this.hideForm(postType)}>x</button>
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
      : ''
      }
      </>
    )
  }
}
export default PostForm;