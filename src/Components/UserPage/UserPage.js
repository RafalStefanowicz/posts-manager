import React, { Component } from "react";

import withUserPosts from "./withUserPosts";
import UserNav from "./UserNav/UserNav";
import Posts from "./Posts/Posts";
import PostDetails from "./PostDetails/PostDetails";
class UserPage extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const userId = this.props.match.params.userId;
    const postId = this.props.match.params.postId;
    const searchedPost = this.props.posts.find(
      post => Number(post.id) === Number(postId)
    );
    const { user, posts } = this.props;
    return (
      <>
        <UserNav userId={userId} postId={postId} userName={user.name} />
        {postId ? <PostDetails post={searchedPost} /> : <Posts posts={posts} />}
      </>
    );
  }
}

export default withUserPosts(UserPage);
