import { connect } from "react-redux"
import ProfileHeader from "./profile_header"

const mSTP = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  userId: ownProps.userId,
  user: ownProps.user
})

const mDTP = dispatch => ({})

export default connect(mSTP, mDTP)(ProfileHeader)