import { connect } from "react-redux"
import UserProfile from "./user_profile"

const mSTP = (state, ownProps) => ({
  userId: ownProps.match.params.userId
})

const mDTP = dispatch => ({})

export default connect(mSTP, mDTP)(UserProfile)