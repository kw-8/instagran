import { connect } from "react-redux"
import ProfileHeader from "./profile_header"
import { updateUser } from "../../actions/session_actions"

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.currentUser.id,
  userId: ownProps.userId,
  user: ownProps.user
})

const mDTP = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
})

export default connect(mSTP, mDTP)(ProfileHeader)