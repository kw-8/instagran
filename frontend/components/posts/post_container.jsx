import { connect } from "react-redux";
import Post from './post'
import { getPost } from "../../actions/post_actions";

const mSTP = (state, ownProps) => (
  // console.log('state in post container',state),
  // console.log('ownprops',ownProps),
  {
    description: 'placeholder for post description',
    post: state.entities.posts[ownProps.match.params.postId]
  }
)

const mDTP = (dispatch) => ({
  getPost: (id) => dispatch(getPost(id))
})

export default connect(mSTP, mDTP)(Post);