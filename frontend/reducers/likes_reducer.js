import {
  RECEIVE_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE
} from "../actions/like_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_LIKES:
      return Object.assign(nextState, action.likes);
    case RECEIVE_LIKE:
      nextState[action.like.id] = action.like
      return nextState;
    case REMOVE_LIKE:
      delete nextState[action.like.id]
      return nextState;
    default:
      return state;
  }
}