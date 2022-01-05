import React from "react";
import { Link } from "react-router-dom";
import CommentsContainer from "../comments/comments_container";
// import UserInfoContainer from "../user_info/user_info_container";

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.showEditForm = this.showEditForm.bind(this);
    this.togglePostDropdown = this.togglePostDropdown.bind(this);
  }

  componentDidMount() {
    // fetch a post *unless* given prop type: i.e. list_item
    if (!this.props.type) {
      this.props.getPost(this.props.postId) //this.props.match.params.postId
        // .then(() => console.log(this.props.post.description))
    }
    this.props.getComments(this.props.postId)
  }

  showEditForm(e) {
    e.preventDefault()
    document.querySelector('.edit_post').setAttribute('style', 'visibility: visible');
  }

  togglePostDropdown(e) {
    e.preventDefault()
    let menu = document.querySelector(`.post-dropdown.post-${this.props.postId} > div`);
    if (menu.style['visibility'] && menu.style['visibility'] === "hidden") {
      menu.setAttribute('style', 'visibility: visible');
    } else {
      menu.setAttribute('style', 'visibility: hidden');
    }
  }

  render() {
    if (!this.props.post) {
      return 'Post Not Found';
    }
    const { post, deletePost, comments, postId } = this.props
    console.log("comments for", postId, comments)
    const { id, description, imageUrls, posterId } = post;
    const user_link = (<Link to={`/user/${posterId}`} className='bold-link'>username here</Link>)
    const user_box = (
      <div className='user-box'>
        <div>
          {/* <UserInfoContainer userId='post.posterId'></UserInfoContainer> */}
          {user_link}
        </div>
        <div className={`post-dropdown post-${this.props.postId} dropdown`}>
          <a onClick={this.togglePostDropdown}>•••</a>
          <div>
            {this.props.type === 'list_item' ?
              <Link to={`/posts/${id}`} className="x" className='bold-link'>{'Go to Post'}</Link> : ''}
            {parseInt(this.props.post.posterId) === this.props.currentUserId && this.props.type !== 'list_item' ?
              <a className="x" onClick={this.showEditForm}>Edit</a>
              : ""
            }
            {parseInt(this.props.post.posterId) === this.props.currentUserId ?
              <Link to="/" className="x" className='bold-link' onClick={() => deletePost(post.id)}>Delete</Link> : ''}
          </div>
        </div>
      </div>
    )
    const div_name = (this.props.type === 'list_item') ? 'post-item' : 'post'

    return (
      <div className={div_name} key={`post-${id}`} >
        { div_name === 'post-item' ?  user_box : '' }
        <div className="image-container">
          <div className='images-box'>
            {imageUrls.map((url, i) => (
              <div className="img-div">
                <img key={i} src={url} className={`${i === 0 ? 'active' : ''}`} id={`${i}`} />
              </div>
            ))}
            { imageUrls.length === 0 ? "" :
              <>
                <a className="prev hidden">❮</a>
                <a className="next">❯</a>
              </>
            }
          </div>
        </div>
        <div className='text-container'>
          { div_name === 'post' ? user_box : '' }
          <div className='description-container'>
            {user_link}
            {description}
          </div>
          <div className='comments-container'>
            <CommentsContainer comments={comments} postId={postId} />
          </div>
        </div>
      </div>
    )
  }
}

export default Post;