import { connect } from "react-redux";
import Explore from "./explore";
import {
  getPosts,
  deletePost
} from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
  console.log(state.entities.posts);
  return ({
    posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
    url: ownProps.location.pathname
  })
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  deletePost: (id) => dispatch(deletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Explore);