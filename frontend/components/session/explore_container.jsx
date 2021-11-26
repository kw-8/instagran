import React from "react";
import { connect } from "react-redux";
import Explore from "./explore";
import { getPosts } from "../../actions/post_actions";

const mapStateToProps = state => {
  console.log(state);
  // debugger;
  return ({
    posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key])
  })
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Explore);