import {
  RECEIVE_LIKES,
  REMOVE_LIKE
} from "../actions/like_actions";

// const nullLike = { likes: {} }
export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_LIKES:
      return Object.assign(nextState, action.likes);
    case REMOVE_LIKE:
      delete nextState[action.like.id]
      return nextState;
    default:
      return state;
  }
}