import * as CommentUtil from '../util/comment_util'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveComments = COMMENTs => ({
  type: RECEIVE_COMMENTS,
  COMMENTs
});
const receiveComment = COMMENT => ({
  type: RECEIVE_COMMENT,
  COMMENT
});
const removeComment = COMMENT => ({
  type: REMOVE_COMMENT,
  COMMENT
});
const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const getComment = commentId => dispatch => {}