import React from "react";
import { Link } from "react-router-dom";
import CommentsContainer from "../comments/comments_container";
import UserInfoContainer from "../user_info/user_info_container";
import UserPfpContainer from "../user_info/user_pfp_container";

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.showEditForm = this.showEditForm.bind(this);
    this.togglePostDropdown = this.togglePostDropdown.bind(this);
  }

  componentDidMount() {
    // fetch a post *unless* given prop type: i.e. list_item
    if (!this.props.type) {
      this.props.getPost(this.props.postId)
    }
    this.props.getComments(this.props.postId)
  }

  showEditForm(e) {
    e.preventDefault()
    document.querySelector('.edit_post').setAttribute('style', 'visibility: visible');
  }

  componentDidUpdate(prevProps) {
    let { getPost, postId } = this.props;
    console.log(postId, prevProps.postId)
    if (postId !== prevProps.postId) getPost(postId);
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
    const { post, deletePost, comments, postId, type } = this.props
    const { id, description, imageUrls, posterId } = post;
    const user_box = (
      <div className='post-info'>
        <div className="user-box">
          <UserPfpContainer userId={posterId}></UserPfpContainer>
          <UserInfoContainer userId={posterId}></UserInfoContainer>
        </div>
        <div className={`post-dropdown post-${this.props.postId} dropdown`}>
          <a onClick={this.togglePostDropdown}>•••</a>
          <div>
            {type === 'list_item' ?
              <Link to={`/posts/${id}`} className="x" className='bold-link'>{'Go to Post'}</Link> : ''}
            {parseInt(this.props.post.posterId) === this.props.currentUserId && type !== 'list_item' ?
              <a className="x" onClick={this.showEditForm}>Edit</a>
              : ""
            }
            {parseInt(this.props.post.posterId) === this.props.currentUserId ?
              <Link to="/" className="x" className='bold-link' onClick={() => deletePost(post.id)}>Delete</Link> : ''}
          </div>
        </div>
      </div>
    )

    const post_type = (type === 'list_item') ? 'post-item' : 'post'
    const description_pfp = post_type === 'post' ?
      <UserPfpContainer userId={posterId}></UserPfpContainer> : null

    return (
      <div className={post_type} key={`post-${id}`} >
        { post_type === 'post-item' ?  user_box : '' }
        <div className="image-container">
          <div className='images-box'>
            {imageUrls.map((url, i) => (
              <div className="img-div" key={i}>
                <img src={url} className={`${i === 0 ? 'active' : ''}`} id={`${i}`} />
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
          { post_type === 'post' ? user_box : '' }
          <div className='description-container'>
            {description_pfp}
            <UserInfoContainer userId={posterId}></UserInfoContainer>
            {" "}
            {description}
          </div>
          <div className='comments-container'>
            <CommentsContainer comments={comments} postId={postId} postType={post_type} />
          </div>
        </div>
      </div>
    )
  }
}

export default Post;