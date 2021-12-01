export const createPost = post => {
  return $.ajax({
    method: 'post',
    url: 'api/posts',
    data: post,
    contentType: false,
    processData: false
  })
}

export const updatePost = post => {
  return $.ajax({
    method: 'patch',
    url: `api/posts/${post.id}`,
    data: post,
    contentType: false,
    processData: false
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