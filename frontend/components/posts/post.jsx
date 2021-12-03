import React from "react";
import { Link } from "react-router-dom";
import CommentsContainer from "../comments/comments_container";
// import UserInfoContainer from "../user_info/user_info_container";

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // fetch a post *unless* given prop type: i.e. list_item
    if (!this.props.type) {
      this.props.getPost(this.props.postId) //this.props.match.params.postId
        .then(() => console.log(this.props.post.description))
    }
  }

  render() {
    if (!this.props.post) {
      return 'Post Not Found';
    }
    const {post, deletePost, comments} = this.props
    const user_link = (<Link to='/' className='bold-link'>username here</Link>)
    const user_box = (
      <div className='user-box'>
        <div>
          {/* <UserInfoContainer userId='post.posterId'></UserInfoContainer> */}
          {user_link}
        </div>
        {/* refactor link to modal later */}
        <div>
          <Link to="/" className="x" className='bold-link' onClick={() => deletePost(post.id)}>x</Link>
        </div>
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
            <CommentsContainer comments={comments} />
          </div>
        </div>
      </div>
    )
  }
}

export default Post;