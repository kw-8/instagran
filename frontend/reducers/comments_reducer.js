import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  REMOVE_COMMENT
} from "../actions/comment_actions";
import {
  RECEIVE_POSTS,
  RECEIVE_POST
} from "../actions/post_actions";

const nullComment = { comments: {} }

export default (state = nullComment.comments, action) => {
  // debugger
  Object.freeze(state);

  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      // debugger
      return Object.assign(nextState, action.comments);
    case RECEIVE_COMMENT:
      // debugger
      nextState[action.comment.id] = action.comment;
      return nextState;
    case REMOVE_COMMENT:
      // debugger
      delete nextState[action.comment.id]
      return nextState
    default:
      return state;
  }
}