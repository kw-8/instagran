import React from "react";
import comments_container from "./comments_container";
import { Link } from "react-router-dom";

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.comments;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCommentDropdown = this.toggleCommentDropdown.bind(this);
  }

  toggleCommentDropdown(commentId) {
    // e.preventDefault()
    let menu = document.querySelector(`.comment-${commentId} .comment-dropdown`);
    if (menu.style['visibility'] && menu.style['visibility'] === "hidden") {
      menu.setAttribute('style', 'visibility: visible');
    } else {
      menu.setAttribute('style', 'visibility: hidden');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    const { postId, currentUserId } = this.props;
    this.props.createComment({
      commenter_id: currentUserId,
      post_id: postId,
      body: document.querySelector(`#new-comment-${this.props.postId}`).value
    })
    // this.setState(this.state);
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
    const user_link = (<Link to='/' className='bold-link'>username here</Link>)
    // console.log('RENDER COMMENTS IN COMMENTS JSX', comments)
    return (
      <>
      <ul>
      {
        comments.map(comment => (
          <li key={comment.id} className={`comment-${comment.id}`}>
            <div>
              <div className="comment-text">
                {user_link}
                {comment.commenterId + ' ' + comment.body}
              </div>
              {comment.commenterId === currentUserId ?
                <div>
                  <a className="toggle-button" onClick={() => this.toggleCommentDropdown(comment.id)}>
                    •••
                  </a>
                  <div className="comment-dropdown">
                    <a onClick={() => this.props.deleteComment({id: comment.id} )}>
                      Delete
                    </a>
                  </div>
                </div>
                : ""
              }
            </div>
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