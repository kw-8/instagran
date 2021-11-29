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
      return 'loading';
    }
    
    const {post, deletePost} = this.props
    const user_link = (<Link to='/'>username here</Link>)
    const user_box = (
      <div className='user-box'>
        {user_link}
        {/* <button onClick={() => deletePost(post.id)}>x</button> */}
      </div>
    )
    const { description } = this.props.post;
    const div_name = (this.props.type === 'list_item') ? 'post-item' : 'post'
    
    return (
      <div className={div_name}>
        { div_name === 'post-item' ?  user_box : '' }
        <div className='image-container'>
          Images go here
        </div>
        <div className='text-container'>
          { div_name === 'post' ? user_box : '' }
          <div className='description-container'>
            {user_link}
            {description}
          </div>
          <div className='comments-container'>
            Comments go here
          </div>
        </div>
      </div>
    )
  }
}

export default Post;