export const createComment = (comment) => {
  return $.ajax({
    method: 'post',
    url: `api/posts/${comment.postId}/comments`,
    data: comment
  })
}

export const getComments = postId => {
  return $.ajax({
    method: 'get',
    url: `api/posts/${postId}/comments`
  })
}

export const deleteComment = comment => {
  return $.ajax({
    method: 'delete',
    url: `api/posts/${comment.postId}/comments/${comment.id}`
  })
}