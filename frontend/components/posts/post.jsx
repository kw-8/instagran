import React from "react";
import { Link } from "react-router-dom";

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // fetch a post *unless* given prop type: i.e. list_item
    if (!this.props.type) {
    this.props.getPost(this.props.match.params.postId)
      .then(() => console.log(this.props.post.description))
    }
  }

  render() {
    if (!this.props.post) {
      return 'loading';
    }
    const { description } = this.props.post;

    const div_name = (this.props.type === 'list_item') ? 'post-item' : 'post'
    return (
      <div className={div_name}>
        <div className='image-container'>
          Images go here
        </div>
        <div className='text-container'>
          <div className='description-container'>
            <Link to='/'>username here</Link> {description}
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