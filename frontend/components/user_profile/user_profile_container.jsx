import { connect } from "react-redux"
import UserProfile from "./user_profile"
import { getUser } from "../../actions/session_actions"

const mSTP = (state, ownProps) => ({
  userId: ownProps.match.params.userId,
  users: state.entities.users
})

const mDTP = dispatch => ({
  getUser: userId => dispatch(getUser(userId))
})

export default connect(mSTP, mDTP)(UserProfile)