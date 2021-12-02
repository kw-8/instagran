import * as CommentUtil from '../util/comment_util'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});
export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});
export const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});


export const createComment = formComment => dispatch => {
  return CommentUtil.createComment(formComment)
    .then(comment => dispatch(receiveComment(comment)))
}

export const getComments = postId => dispatch => {
  return CommentUtil.getComments(postId)
    .then(comments => dispatch(receiveComments(comments)))
}

export const deleteComment = id => dispatch => {
  return CommentUtil.deleteComment(id)
    .then(comment => dispatch(removeComment(comment)))
}