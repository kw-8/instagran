import { connect } from "react-redux"
import UserInfo from "./user_info"
import { getUser } from "../../actions/session_actions"

const mSTP = (state, ownProps) => {
  console.log(state, ownProps)
  return {
  userId: ownProps.userId,
  users: state.entities.users
}}

const mDTP = dispatch => ({
  getUser: userId => dispatch(getUser(userId))
})

export default connect(mSTP, mDTP)(UserInfo)