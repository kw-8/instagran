import { connect } from "react-redux";
import { updatePost } from "../../actions/post_actions";
import PostForm from "./post_form";

const mapStateToProps = (state, ownProps) => {
  return ({
    post: state.entities.posts[ownProps.match.params.id],
    postType: 'edit_post'
  })
}

const mapDispatchToProps = dispatch => ({
  submitPost: post => dispatch(updatePost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);