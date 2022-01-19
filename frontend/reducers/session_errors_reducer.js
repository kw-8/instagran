import { RECEIVE_SESSION_ERRORS, REMOVE_SESSION_ERRORS } from "../actions/session_actions";

const sessionErrorsReducer = (state={}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;
    case REMOVE_SESSION_ERRORS:
      return {};
    default:
      return {};
  }
}

export default sessionErrorsReducer;