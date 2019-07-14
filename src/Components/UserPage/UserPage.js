import React, { Component } from "react";
import PropTypes from "prop-types";

import withUserPosts from "./withUserPosts";
import UserNav from "./UserNav/UserNav";
import Posts from "./Posts/Posts";
import PostDetailsContainer from "./PostDetails/PostDetailsContainer";
class UserPage extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const userId = Number(this.props.match.params.userId);
    const postId = Number(this.props.match.params.postId);
    const searchedPost = this.props.posts.find(post => post.id === postId);
    const { user, posts } = this.props;
    return (
      <>
        <UserNav userId={userId} postId={postId} userName={user.name} />
        {postId ? (
          <PostDetailsContainer post={searchedPost} />
        ) : (
          <Posts posts={posts} />
        )}
      </>
    );
  }
}
UserPage.propTypes = {
  match: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
};

export default withUserPosts(UserPage);
