import { Connect } from "react-redux";
import {
  createComment,
  getComments,
  deleteComment
} from "../../actions/comment_actions";

const mSTP = (state, ownProps) => {
  return {}
}

const mDTP = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment)),
  getComments: () => dispatch(getComments()),
  deleteComment: (id) => dispatch(deleteComment(id))
})

// export default