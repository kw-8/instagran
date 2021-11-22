import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

const nullSession = { currentUser: null }

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = Object.assign({}, {currentUserId: action.currentUser.id});
      return newState;
    case LOGOUT_CURRENT_USER:
      return nullSession;
    default:
      break;
  }
}