import { connect } from "react-redux";
import Post from './post'
import {
  getPost,
  deletePost
} from "../../actions/post_actions";
import {
  getComments
} from "../../actions/comment_actions"
// import { withRouter } from "react-router";

const mSTP = (state, ownProps) => {
  let post = ownProps.post || state.entities.posts[ownProps.match.params.postId]
  let postId = ownProps.match ? ownProps.match.params.postId : ownProps.postId
  let currentUserId = state.session.currentUser ? state.session.currentUser.id : ''
  // debugger
  return { // first pass, post DNI, second pass received post, now in state
    currentUserId,
    postId,
    post: post || '',
    comments: Object.values(state.entities.comments).filter(comment => comment.postId === parseInt(postId))
  }
}

const mDTP = (dispatch) => {
  return {
    getComments: postId => dispatch(getComments(postId)),
    getPost: (id) => dispatch(getPost(id)),
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mSTP, mDTP)(Post);