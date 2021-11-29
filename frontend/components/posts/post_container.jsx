import { connect } from "react-redux";
import Post from './post'
import {
  getPost,
  deletePost
} from "../../actions/post_actions";

const mSTP = (state, ownProps) => (
  {
    description: 'placeholder for post description',
    post: state.entities.posts[ownProps.match.params.postId]
  }
)

const mDTP = (dispatch) => ({
  getPost: (id) => dispatch(getPost(id)),
  deletePost: (id) => dispatch(deletePost(id))
})

export default connect(mSTP, mDTP)(Post);