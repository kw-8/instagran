import { connect } from "react-redux";
import Post from './post'
import {
  getPost,
  deletePost
} from "../../actions/post_actions";

const mSTP = (state, ownProps) => {
  let post = ownProps.post || state.entities.posts[ownProps.match.params.postId]
  return {
    description: 'placeholder for post description',
    post,
    comments: Object.values(state.entities.comments).filter(comment => comment.postId === post.id)
  }
}

const mDTP = (dispatch) => ({
  getPost: (id) => dispatch(getPost(id)),
  deletePost: (id) => dispatch(deletePost(id))
})

export default connect(mSTP, mDTP)(Post);