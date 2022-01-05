export const signup = user => {
  return $.ajax({
    method: 'post',
    url: 'api/users',
    data: { user }
  })
}
export const login = user => {
  return $.ajax({
    method: 'post',
    url: 'api/session',
    data: { user }
  })
}
export const logout = () => {
  return $.ajax({
    method: 'delete',
    url: 'api/session'
  })
}

export const updateUser = user => {
  return $.ajax({
    method: 'patch',
    url: `api/users/${user.id}`,
    data: user,
    contentType: false,
    processData: false
  })
}

// other user util actions
export const getUser = userId => {
  return $.ajax({
    method: 'get',
    url: `api/users/${userId}`
  })
}

export const getUsers = () => {
  return $.ajax({
    method: 'get',
    url: `api/users/`
  })
}

export const deleteUser = userId => {
  return $.ajax({
    method: 'delete',
    url: `api/users/${userId}`
  })
}