import React from "react";
import UserInfoContainer from "../user_info/user_info_container";
import UserPfpContainer from "../user_info/user_pfp_container";
import { setUpClickAway, removeClickAway } from "../dropdown";

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.comments;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCommentDropdown = this.toggleCommentDropdown.bind(this);
  }

  toggleCommentDropdown(commentId) {
    e.preventDefault();
    let menu = document.querySelector(`.comment-${commentId} .comment-dropdown`);
    if (menu.style['visibility'] && menu.style['visibility'] === "hidden") {
      setUpClickAway(`.comment-${commentId} .toggle-button`, `.comment-${commentId} .dropdown`);
      menu.setAttribute('style', 'visibility: visible');
    } else {
      removeClickAway(`.comment-${commentId} .toggle-button`, `.comment-${commentId} .dropdown`);
      // menu.setAttribute('style', 'visibility: hidden');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const { postId, currentUserId } = this.props;
    this.props.createComment({
      commenter_id: currentUserId,
      post_id: postId,
      body: document.querySelector(`#new-comment-${this.props.postId}`).value
    })
    document.querySelector(`#new-comment-${this.props.postId}`).value = ''
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  render() {
    const { comments, currentUserId } = this.props

    return (
      <>
      <ul>
      {
        comments.map(comment => (
          <li key={comment.id} className={`comment-${comment.id}`}>
            <div className="comment-container">
              {this.props.postType === 'post' ?
                <UserPfpContainer userId={comment.commenterId} /> : null}
              <UserInfoContainer userId={comment.commenterId}></UserInfoContainer>
              {" "}
              {comment.body}
            </div>

            {comment.commenterId === currentUserId ?
              <div className="dots">
                <a className="toggle-button" onClick={() => this.toggleCommentDropdown(comment.id)}>
                  •••
                </a>
                <div className="comment-dropdown dropdown">
                  <a onClick={() => this.props.deleteComment({id: comment.id} )}>
                    Delete
                  </a>
                </div>
              </div>
              : ""
            }
          </li>
        ))
      }
      </ul>
      <div>
        <form>
          <input type="text" id={`new-comment-${this.props.postId}`}
              onChange={this.update(`new-comment-${this.props.postId}`)} />
          <button onClick={this.handleSubmit}>Post</button>
        </form>
      </div>
      </>
    )
  }

}
export default Comments