import React from "react";

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
  }

  follow() {
    const { createFollow, currentUserId, userId } = this.props;
    createFollow({
      'followed_id': currentUserId,
      'follower_id': userId
    });
  }

  unfollow() {
    const { follows, currentUserId, userId } = this.props;
    let followId = follows.find(follow => follow.followerId === currentUserId && follow.followedId === parseInt(userId))
    this.props.deleteFollow(followId);
  }

  componentDidMount() {
    let { getFollows, userId } = this.props;
    getFollows({ 'followed_id': userId });
  }

  componentDidUpdate(prevProps) {
    let { follows, getFollows, userId } = this.props;
    if (follows.length !== prevProps.follows.length) getFollows({ 'followed_id': userId });
  }

  render() {
    let { follows, currentUserId, userId } = this.props;
    return (
      <div className="user-follow-box">
        {
          follows.find(follow => follow.followerId === currentUserId && follow.followedId === parseInt(userId)) ?
            <button onClick={this.unfollow}>unfollow</button>
            : <button onClick={this.follow}>follow</button>
        }
      </div>
    )
  }
}

export default FollowButton;