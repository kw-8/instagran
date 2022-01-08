import { connect } from "react-redux";
import PostLikes from "./post_likes";
import {
  createLike,
  getLikes,
  deleteLike
} from "../../actions/like_actions";

const mSTP = (state, ownProps) => {
  const postId = ownProps.postId;
  return {
    post: state.entities.posts[postId],
    currentUserId: state.session.currentUser.id,
    likes: Object.values(state.entities.likes)
  }
}

const mDTP = (dispatch) => {
  return {
    createLike: like => dispatch(createLike(like)),
    getLikes: like_params => dispatch(getLikes(like_params)),
    deleteLike: likeId => dispatch(deleteLike(likeId))
  }
}

export default connect(mSTP, mDTP)(PostLikes);