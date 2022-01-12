import React from "react";
import PostContainer from "../posts/post_container";

class Explore extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount(){
    this.props.getPosts();
  }
  
  render() {
    const { posts } = this.props;
    if (posts[0] === null) return null;
    return (
      <div id="explore">
        <ul>
          {
            posts.reverse().map(post => (
                <PostContainer
                  key={post.id}
                  postId={post.id}
                  post={post}
                  type='list_item'
                />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Explore;