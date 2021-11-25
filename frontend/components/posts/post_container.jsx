import { connect } from "react-redux";
import Post from './post'

const mSTP = state => (
  {
    description: 'placeholder for post description'
  }
)

const mDTP = dispatch => ({
})

export default connect(mSTP, mDTP)(Post);