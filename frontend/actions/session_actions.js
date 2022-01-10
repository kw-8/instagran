import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})
const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})
const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})
const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

// user from the form
export const signup = (user) => dispatch => (
  APIUtil.signup(user)
  .then(user => dispatch(receiveCurrentUser(user)))
)
export const login = (user) => dispatch => (
  APIUtil.login(user)
  .then(user => dispatch(receiveCurrentUser(user)))
)
export const logout = () => dispatch => (
  APIUtil.logout()
  .then(() => dispatch(logoutCurrentUser()))
  .fail(error => console.log(error))
)

export const getUsers = () => dispatch => (
  APIUtil.getUsers()
  .then(users => dispatch(receiveUsers(users)))
  )
export const getUser = (userId) => dispatch => (
  APIUtil.getUser(userId)
  .then(user => {
    return dispatch(receiveUser(user))
  })
  )
export const updateUser = (formUser) => dispatch => (
  APIUtil.updateUser(formUser)
  .then(user => dispatch(receiveUser(user)))
  )