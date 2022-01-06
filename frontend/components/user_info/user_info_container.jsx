// needs access to user state
// import getUser... implement user actions
import { connect } from "react-redux"
import UserInfo from "./user_info"

const mSTP = (state, ownProps) => ({
  user: ownProps.user
})

// const mDTP = dispatch => ({})

export default connect(mSTP, null)(UserInfo)