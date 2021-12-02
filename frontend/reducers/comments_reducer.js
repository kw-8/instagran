import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  REMOVE_COMMENT
} from "../actions/comment_actions";
import { RECEIVE_POSTS } from "../actions/post_actions";

const nullComment = { comments: {} }

export default (state = nullComment.comments, action) => {
  // debugger
  Object.freeze(state);

  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_POSTS:
      debugger
      const comments = {}
      Object.values(action.payload.comments).forEach(comment => {
        comments[comment.id] = comment
      });
      return comments;
    case RECEIVE_COMMENTS:
      debugger
      return Object.assign(nextState, action.payload.comments);
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