import React from "react";
import { Link } from "react-router-dom";

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='post'>
        <div className='image-container'>
          Images go here
        </div>
        <div className='text-container'>
          <div className='description-container'>
            {this.props.description}
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