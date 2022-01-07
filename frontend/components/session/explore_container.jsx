import { connect } from "react-redux";
import Explore from "./explore";
import {
  getPosts
} from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
  return ({
    posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
    url: ownProps.location.pathname,
    comments: state.entities.comments //filter happens in post
  })
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Explore);