import { connect } from "react-redux"
import UserProfilePic from "./user_pfp"
import { getUser } from "../../actions/session_actions"

const mSTP = (state, ownProps) => ({
  userId: ownProps.userId,
  users: state.entities.users
})

const mDTP = dispatch => ({
  getUser: userId => dispatch(getUser(userId))
})

export default connect(mSTP, mDTP)(UserProfilePic)