export const createFollow = (follow) => {
  return $.ajax({
    method: 'post',
    url: `api/follows`,
    data: { follow }
  })
}

export const getFollows = follow_params => {
  return $.ajax({
    method: 'get',
    url: `api/follows`,
    data: follow_params
  })
}

export const deleteFollow = follow => {
  return $.ajax({
    method: 'delete',
    url: `api/follows/${follow.id}`
  })
}