import React from "react";
import { Link } from "react-router-dom";

class ProfileGrid extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let {posts} = this.props;
    if (!posts) return null;

    return (
      <div className="profile-grid">
        {posts.map(post =>
          <div key={post.id} className="box">
            <Link to={`/posts/${post.id}`}>
              <img src={post.imageUrls[0]} />
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default ProfileGrid