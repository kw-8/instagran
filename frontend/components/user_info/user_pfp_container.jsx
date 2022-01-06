import { connect } from "react-redux"
import UserProfilePic from "./user_pfp"

const mSTP = (state, ownProps) => ({
  userId: ownProps.user,
  users: state.entities.users
})

const mDTP = dispatch => ({
  getUser: userId => dispatch(getUser(userId))
})

export default connect(mSTP, null)(UserProfilePic)