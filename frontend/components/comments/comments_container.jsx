import { connect } from "react-redux";
import {
  createComment,
  getComments,
  deleteComment
} from "../../actions/comment_actions";
import Comments from "./comments";

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.currentUser.id,
  comments: Object.values(state.entities.comments).filter(comment => comment.postId === parseInt(ownProps.postId)),
  postType: ownProps.postType
})

const mDTP = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment)),
  getComments: () => dispatch(getComments()),
  deleteComment: (id) => dispatch(deleteComment(id))
})

export default connect(mSTP, mDTP)(Comments)