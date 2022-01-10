import { connect } from "react-redux";
import Carousel from "./carousel";

const mSTP = (state, ownProps) => {
  return {
    postId: ownProps.postId,
    imageUrls: ownProps.imageUrls
  }
}

export default connect(mSTP, null)(Carousel);