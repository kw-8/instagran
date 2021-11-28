import React from "react";
import { Link } from "react-router-dom";

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.postId)
      .then(() => console.log(this.props.post.description))
  }

  render() {
    if (!this.props.post) {
      return 'loading';
    }
    const { description } = this.props.post;
    return (
      <div className='post'>
        <div className='image-container'>
          Images go here
        </div>
        <div className='text-container'>
          <div className='description-container'>
            {description}
          </div>
          <div className='comments-container'>
            Comments go here
          </div>
        </div>
      </div>
    )
  }
}

export default Post;