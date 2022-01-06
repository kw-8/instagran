import { connect } from "react-redux"
import UserProfilePic from "./user_pfp"

const mSTP = (state, ownProps) => ({
  user: ownProps.user
})

// const mDTP = dispatch => ({})

export default connect(mSTP, null)(UserProfilePic)