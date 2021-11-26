import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  REMOVE_POST
} from "../actions/post_actions";

const nullPost = { posts: null }

const postsReducer = (state=nullPost, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_POST:
      return Object.assign({}, state, {[action.post.id] : action.post});
    case RECEIVE_POSTS:
      return action.posts;
    case REMOVE_POST:
      delete newState[posts][action.post.id]
      return newState;
    default:
      state;
  }
}

export default postsReducer;