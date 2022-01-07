import * as LikeUtil from '../util/like_util'

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';

export const receiveLikes = LIKEs => ({
  type: RECEIVE_LIKES,
  LIKEs
});
export const removeLike = LIKE => ({
  type: REMOVE_LIKE,
  LIKE
});


export const createLike = (newLike) => dispatch => {
  return LikeUtil.createLike(newLike)
    .then(like => dispatch(receiveLike(like)))
}

export const getLikes = like_params => dispatch => {
  console.log(like_params)
  return LikeUtil.getLikes(like_params)
    // .then(likes => console.log(likes))
    .then(likes => dispatch(receiveLikes(likes)))
}

export const deleteLike = id => dispatch => {
  return LikeUtil.deleteLike(id)
    .then(like => dispatch(removeLike(like)))
}