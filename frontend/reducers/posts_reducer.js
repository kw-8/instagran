import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  REMOVE_POST
} from "../actions/post_actions";

const nullPost = { posts: null }

export default (state = nullPost, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_POST:
      debugger;// action -> id
      newState[action.payload.post.id] = action.payload.post;
      return newState;
    case RECEIVE_POSTS:
      debugger
      const posts = {}
      Object.values(action.payload.posts).forEach( post => {
        posts[post.id] = post
      });
      return posts;
    case REMOVE_POST:
      delete newState[action.post.id]
      return newState;
    default:
      return state;
  }
}