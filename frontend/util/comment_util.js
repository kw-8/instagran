export const createComment = (comment) => {
  return $.ajax({
    method: 'post',
    url: `api/posts/${comment.postId}/comments`,
    data: comment
  })
}

export const deleteComment = comment => {
  return $.ajax({
    method: 'delete',
    url: `api/posts/${comment.postId}/comments/${comment.id}`
  })
}