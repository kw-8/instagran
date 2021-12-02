import { connect } from "react-redux";
import {
  createComment,
  getComments,
  deleteComment
} from "../../actions/comment_actions";
import Comments from "./comments";

const mSTP = (state, ownProps) => ({})

const mDTP = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment)),
  getComments: () => dispatch(getComments()),
  deleteComment: (id) => dispatch(deleteComment(id))
})

export default connect(mSTP, mDTP)(Comments)