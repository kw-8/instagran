import { connect } from "react-redux";
import Post from './post'
import {
  getPost,
  deletePost
} from "../../actions/post_actions";
// import { withRouter } from "react-router";

const mSTP = (state, ownProps) => {
  debugger
  let post = ownProps.post || state.entities.posts[ownProps.match.params.postId]
  
  return { // first pass, post DNI, second pass received post, now in state
    postId: ownProps.match.params.postId || '',
    post: post || '',
    comments: Object.values(state.entities.comments).filter(comment => comment.postId === parseInt(post.id))
  }
}

const mDTP = (dispatch) => {
  return {
    getPost: (id) => dispatch(getPost(id)),
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mSTP, mDTP)(Post);