import { connect } from "react-redux"
import ProfileHeader from "./profile_header"

const mSTP = (state, ownProps) => ({
  // userId = ownProps.match.params.userId
})

const mDTP = dispatch => ({})

export default connect(mSTP, mDTP)(ProfileHeader)