import React from "react";

class PostLikes extends React.Component {
  constructor(props) {
    super(props);
    this.like = this.like.bind(this);
    this.unlike = this.unlike.bind(this);
  }

  like() {
    const { createLike, currentUserId, post } = this.props;
    createLike({  'liker_id': currentUserId,
                  'post_id':  post.id});
  }

  unlike() {
    const { likes, currentUserId, post } = this.props;
    let likeId = likes.find(like => like.likerId === currentUserId && like.postId === post.id)
    this.props.deleteLike(likeId);
  }

  componentDidMount() {
    let {getLikes, post} = this.props;
    getLikes({'post_id': post.id});
  }

  componentDidUpdate(prevProps) {
    let { getLikes, post } = this.props;
    if (this.props.likes.length !== prevProps.likes.length) getLikes({ 'post_id': post.id });
  }

  render() {
    let { likes, currentUserId, post } = this.props;
    return (
      <div className="post-likes">
        {
          likes.find(like => like.likerId === currentUserId && like.postId === post.id) ?
            <a onClick={this.unlike}>unlike</a>
          : <a onClick={this.like}>like</a>
          // 
        }
        <p><span>{likes.filter(like => like.postId === post.id).length}</span>{` likes`}</p>
      </div>
    )
  }
}

export default PostLikes