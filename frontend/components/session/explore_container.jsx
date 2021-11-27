import { connect } from "react-redux";
import Explore from "./explore";
import { getPosts } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
  console.log(state.entities.posts);
  // debugger;
  return ({
    posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
    url: ownProps.location.pathname
  })
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Explore);