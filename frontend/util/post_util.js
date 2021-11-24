export const createPost = post => {
  return $.ajax({
    method: 'post',
    url: 'api/posts',
    data: { post }
  })
}

export const updatePost = post => {
  return $.ajax({
    method: 'patch',
    url: `api/posts/${post.id}`,
    data: { post }
  })
}

export const getPost = postId => {
  return $.ajax({
    method: 'get',
    url: `api/posts/${postId}`
  })
}

export const getPosts = () => {
  return $.ajax({
    method: 'get',
    url: `api/posts/`
  })
}

export const deletePost = postId => {
  return $.ajax({
    method: 'delete',
    url: `api/posts/${postId}`
  })
}