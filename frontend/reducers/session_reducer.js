import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

const nullSession = { currentUser: null }

const sessionsReducer = (state = nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = Object.assign({}, { currentUserId: action.user.id});
      return newState;
    case LOGOUT_CURRENT_USER:
      return state;
    default:
      return state;
  }
}

export default sessionsReducer;