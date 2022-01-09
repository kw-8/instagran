import { connect } from "react-redux"
import {
  createFollow,
  getFollows,
  deleteFollow
} from "../../actions/follow_actions"
import FollowButton from "./follow_button"

const mSTP = (state, ownProps) => {
  return {
    userId: ownProps.userId,
    currentUserId: state.session.currentUser.id,
    follows: Object.values(state.entities.follows)
  }
}

const mDTP = dispatch => ({
  createFollow: follow => dispatch(createFollow(follow)),
  getFollows: follow_params => dispatch(getFollows(follow_params)),
  deleteFollow: follow => dispatch(deleteFollow(follow))
})

export default connect(mSTP, mDTP)(FollowButton)