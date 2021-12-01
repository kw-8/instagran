import React from "react";
import { Link } from "react-router-dom";

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // fetch a post *unless* given prop type: i.e. list_item
    if (!this.props.type) {
    this.props.getPost(this.props.match.params.postId)
      .then(() => console.log(this.props.post.description))
    }
  }

  render() {
    if (!this.props.post) {
      return 'Post Not Found';
    }
    console.log(this.props)
    const {post, deletePost} = this.props
    const user_link = (<Link to='/' className='bold-link'>username here</Link>)
    const user_box = (
      <div className='user-box'>
        <div>
          {/* pfp here */}
          {user_link}
        </div>
        {/* refactor link to modal later */}
        <Link to="/" className="x" className='bold-link' onClick={() => deletePost(post.id)}>x</Link>
      </div>
    )
    const { id, description, imageUrls } = this.props.post;
    const div_name = (this.props.type === 'list_item') ? 'post-item' : 'post'
    return (
      <div className={div_name} key={`post-${id}`} >
        { div_name === 'post-item' ?  user_box : '' }
        <div className='image-container'>
          {imageUrls.map((url, i) => <img key={i} src={url} />)}
        </div>
        <div className='text-container'>
          { div_name === 'post' ? user_box : '' }
          <div className='description-container'>
            {user_link}
            {description}
          </div>
          <div className='comments-container'>
            Comments go here
            {/* <CommentsContainer postId={id} /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Post;