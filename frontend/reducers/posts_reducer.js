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
      console.log(action.post);
      newState[action.post.id] = action.post;
      return newState;
    case RECEIVE_POSTS:
      const posts = {}
      console.log('action', action);
      // debugger;
      Object.values(action.posts).forEach( post => {
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