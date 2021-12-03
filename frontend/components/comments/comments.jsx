import React from "react";
import comments_container from "./comments_container";
import { Link } from "react-router-dom";

class Comments extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {comments} = this.props
    const user_link = (<Link to='/' className='bold-link'>username here</Link>)
    console.log('RENDER COMMENTS IN COMMENTS JSX', comments)
    return (
      <ul>
      {
        comments.map(comment => (
          <li key={comment.id}>
            <div>
              {user_link}
              {comment.commenterId + ' ' + comment.body}
            </div>
          </li>
        ))
      }
      </ul>
    )
  }

}
export default Comments