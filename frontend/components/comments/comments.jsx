import React from "react";
import comments_container from "./comments_container";

class Comments extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {comments} = this.props
    console.log('RENDER COMMENTS IN COMMENTS JSX', comments)
    return (
      <ul>
      {
        comments.map(comment => (
          <li key={comment.id}>
            <div>{comment.commenterId + ' ' + comment.body}</div>
          </li>
        ))
      }
      </ul>
    )
  }

}
export default Comments