import * as FollowUtil from '../util/follow_util'

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const REMOVE_FOLLOW_ERRORS = 'REMOVE_FOLLOW_ERRORS';

export const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows
})
export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
})
export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
})

export const createFollow = newFollow => dispatch => {
  return FollowUtil.createFollow(newFollow)
    .then(follow => dispatch(receiveFollow(follow)))
}
export const getFollows = follow_params => dispatch => {
  return FollowUtil.getFollows(follow_params)
    .then(follows => dispatch(receiveFollows(follows)))
}
export const deleteFollow = follow => dispatch => {
  return FollowUtil.deleteFollow(follow)
    .then(follow => dispatch(removeFollow(follow)))
}