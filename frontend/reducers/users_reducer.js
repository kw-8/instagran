import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER,
  RECEIVE_USERS
} from "../actions/session_actions";

export default (state={}, action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger
      return Object.assign({}, state, {[action.user.id]: action.user});
    case RECEIVE_USER:
      // debugger
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USERS:
      // debugger
      return state;
    default:
      return state;
  }
}