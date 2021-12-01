import React from "react";
import { Link } from "react-router-dom";
import { deletePost } from "../../util/post_util";
import Post from "../posts/post";

class Explore extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount(){
    this.props.getPosts();
  }
  
  render() {
    const { posts, deletePost } = this.props;
    return (
      <div id="explore">explore
        <ul>
          {
            posts.map(post => (
                <Post
                  key={post.id}
                  post={post}
                  type='list_item'
                  deletePost={deletePost}
                />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Explore;