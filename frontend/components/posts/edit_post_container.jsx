import { connect } from "react-redux";
import {
  getPost,
  updatePost
} from "../../actions/post_actions";
import PostForm from "./post_form";

const mapStateToProps = (state, ownProps) => {
  return ({
    post: state.entities.posts[ownProps.match.params.postId],
    postType: 'edit_post'
  })
}

const mapDispatchToProps = dispatch => ({
  getPost: postId => dispatch(getPost(postId)),
  submitPost: post => dispatch(updatePost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);