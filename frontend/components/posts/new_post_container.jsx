import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import PostForm from "./post_form";

const mapStateToProps = state => {
  return ({
    post: {
      posterId: state.session.currentUser.id,
      description: ''
    },
    postType: 'new_post'
  })
}

const mapDispatchToProps = dispatch => ({
  submitPost: post => dispatch(createPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);