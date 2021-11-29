import React from "react";
import { Link } from "react-router-dom";
import Post from "../posts/post";

class Explore extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount(){
    this.props.getPosts();
  }
  
  render() {
    console.log('these are props', this.props)
    const { posts } = this.props;
    console.log('these are posts', posts)
    return (
      <div id="explore">explore
        <ul>
          {
            // posts.map(post => (
            //     <Post
            //       key={post.id}
            //       post={post}
            //       type='list_item'
            //     />
            // ))
          }
        </ul>
      </div>
    )
  }
}

export default Explore;