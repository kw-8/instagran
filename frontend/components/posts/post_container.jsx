import { connect } from "react-redux";
import Post from './post'
import * as PostActions from "../../actions/post_actions";

const mSTP = (state, ownProps) => (
  console.log('state in post container',state),
  console.log('ownprops',ownProps),
  {
    description: 'placeholder for post description'
    // post: state.posts[ownProps.match.params.postId]
  }
)

const mDTP = (dispatch, ownProps) => ({
  getPost: () => dispatch(PostActions.getPost(ownProps.match.params.postId))
})

export default connect(mSTP, mDTP)(Post);