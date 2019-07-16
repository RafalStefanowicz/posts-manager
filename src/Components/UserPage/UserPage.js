import React, { Component } from "react";
import PropTypes from "prop-types";

import withUserPosts from "./withUserPosts";
import UserNav from "./UserNav/UserNav";
import Posts from "./Posts/Posts";
import PostDetailsContainer from "./PostDetails/PostDetailsContainer";
import { Wrapper } from "../../styles/common";
import { UserNavWrapper } from "./UserPageStyles";

class UserPage extends Component {
  render() {
    const userId = Number(this.props.match.params.userId);
    const postId = Number(this.props.match.params.postId);
    const searchedPost = this.props.posts.find(post => post.id === postId);
    const { user, posts } = this.props;
    return (
      <Wrapper>
        <UserNavWrapper>
          <UserNav userId={userId} postId={postId} userName={user.name} />
        </UserNavWrapper>
        {postId ? (
          <PostDetailsContainer post={searchedPost} />
        ) : (
          <Posts posts={posts} />
        )}
      </Wrapper>
    );
  }
}
UserPage.propTypes = {
  match: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
};

export default withUserPosts(UserPage);
