import React from "react";
import { Link } from "react-router-dom";
import CommentsContainer from "../comments/comments_container";
import PostLikesContainer from "../likes/post_likes_container";
import UserInfoContainer from "../user_info/user_info_container";
import UserPfpContainer from "../user_info/user_pfp_container";
import CarouselContainer from "./carousel_container";
import { setUpClickAway, removeClickAway } from "../dropdown";

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
    let { postId, getPost } = this.props;
    if (postId !== prevProps.postId) getPost(postId);
  }

  togglePostDropdown(e) {
    e.preventDefault()
    let menu = document.querySelector(`.post-dropdown.post-${this.props.postId} > div`);
    if (!menu.style['visibility'] || menu.style['visibility'] === "hidden") {
      menu.setAttribute('style', 'visibility: visible');
      setUpClickAway(`.post-${this.props.postId} .dropdown-button`, `.post-${this.props.postId} .dropdown`)
    } else {
      menu.setAttribute('style', 'visibility: hidden');
      removeClickAway(`.post-${this.props.postId} .dropdown-button`, `.post-${this.props.postId} .dropdown`)
    }
  }

  render() {
    if (!this.props.post || !this.props.post.imageUrls) {
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
        <div className={`post-dropdown post-${this.props.postId}`}>
          <a onClick={this.togglePostDropdown} className="dropdown-button">•••</a>
          <div className="dropdown">
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
      <UserPfpContainer userId={posterId} postId={postId}></UserPfpContainer> : null

    return (
      <div className={post_type} key={`post-${id}`} >
        { post_type === 'post-item' ?  user_box : '' }
        <CarouselContainer imageUrls={imageUrls}></CarouselContainer>
        <div className='text-container'>
          { post_type === 'post' ? user_box : '' }
          <PostLikesContainer postId={postId} />
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