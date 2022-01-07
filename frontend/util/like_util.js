export const createLike = (like) => {
  return $.ajax({
    method: 'post',
    url: `api/likes`,
    data: { like }
  })
}

export const getLikes = like_params => {
  return $.ajax({
    method: 'get',
    url: `api/likes`,
    data: like_params
  })
}

export const deleteLike = like => {
  return $.ajax({
    method: 'delete',
    url: `api/likes/${like.id}`
  })
}