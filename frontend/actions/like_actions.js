import * as LikeUtil from '../util/like_util'

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';

export const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
});
export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});
export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});


export const createLike = (newLike) => dispatch => {
  return LikeUtil.createLike(newLike)
    .then(like => dispatch(receiveLike(like)))
}

export const getLikes = like_params => dispatch => {
  return LikeUtil.getLikes(like_params)
    .then(likes => dispatch(receiveLikes(likes)))
}

export const deleteLike = like => dispatch => {
  return LikeUtil.deleteLike(like)
    .then(like => dispatch(removeLike(like)))
}