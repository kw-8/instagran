import { connect } from "react-redux"
import ProfileHeader from "./profile_header"
import { updateUser } from "../../actions/session_actions"

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.currentUser.id || null,
  userId: ownProps.userId,
  user: ownProps.user,
  follows: Object.values(state.entities.follows).filter(follow => follow.followedId == ownProps.userId).length
})

const mDTP = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
})

export default connect(mSTP, mDTP)(ProfileHeader)