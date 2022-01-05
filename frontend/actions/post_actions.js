import * as POSTUtil from '../util/post_util'

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';


const receivePosts = payload => ({
  type: RECEIVE_POSTS,
  payload
});
const receivePost = post => ({
  type: RECEIVE_POST,
  post
});
const removePost = post => ({
  type: REMOVE_POST,
  post
});
const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
});

export const getPosts = () => dispatch => {
  return POSTUtil.getPosts().then(
    posts => {
      dispatch(receivePosts(posts))
    }
  )
}
export const getPost = id => dispatch => {
  return POSTUtil.getPost(id).then(
    post => {
      // debugger
      dispatch(receivePost(post))
    }
  )
}

export const createPost = formInput => dispatch => {
  return POSTUtil.createPost(formInput).then(
    post => dispatch(receivePost(post))
  )
}

export const updatePost = formInput => dispatch => {
  return POSTUtil.updatePost(formInput).then(
    post => dispatch(receivePost(post)),
    errors => dispatch(receivePostErrors(errors))
  )
}

export const deletePost = id => dispatch => {
  return POSTUtil.deletePost(id).then(
    post => console.log(post),
    post => dispatch(removePost(post)),
    errors => dispatch(receivePostErrors(errors))
  )
}