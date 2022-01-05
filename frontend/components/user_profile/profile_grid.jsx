import React from "react";

class ProfileGrid extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() { }

  render() {
    let {postIds} = this.props;
    return (
      <div className="profile-grid">
        {postIds.map(postId => 
          <p>{postId},</p>)}
      </div>
    )
  }
}

export default ProfileGrid