import { connect } from "react-redux"
import ProfileGrid from './profile_grid'

const mSTP = (state, ownProps) => ({
  posts: ownProps.posts
})

const mDTP = dispatch => ({})

export default connect(mSTP, mDTP)(ProfileGrid)