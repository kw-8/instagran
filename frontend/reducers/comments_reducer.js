import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  REMOVE_COMMENT
} from "../actions/comment_actions";

const nullComment = { comments: {} }

export default (state = nullComment.comments, action) => {
  // debugger
  Object.freeze(state);

  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign(nextState, action.comments);
    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment;
      return nextState;
    case REMOVE_COMMENT:
      delete nextState[action.comment.id]
      return nextState
    default:
      return state;
  }
}