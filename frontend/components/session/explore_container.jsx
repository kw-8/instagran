import { connect } from "react-redux";
import Explore from "./explore";
import { getPosts } from "../../util/post_util";

const mapStateToProps = state => {
  console.log(state);
  debugger;
  return ({
    posts: state.posts
  })
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Explore);