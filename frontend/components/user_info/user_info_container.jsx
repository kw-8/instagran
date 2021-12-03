// needs access to user state
// import getUser... implement user actions
import { connect } from "react-redux"
import UserInfo from "./user_info"

const mSTP = (state, ownProps) => ({
  userId = ownProps.match.params.userId
})

const mDTP = dispatch => ({})

export default connect(mSTP, mDTP)(UserInfo)