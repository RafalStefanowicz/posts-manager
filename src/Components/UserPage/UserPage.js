import React, { Component } from "react";
import PropTypes from "prop-types";

import withUserPosts from "./withUserPosts";
import UserNav from "./UserNav/UserNav";
import Posts from "./Posts/Posts";
import PostDetailsContainer from "./PostDetails/PostDetailsContainer";
import { Wrapper } from "../../styles/common";
import { StyledUserNavWrapper, StyledUserMainWrapper } from "./userPageStyles";

class UserPage extends Component {
  render() {
    const userIdParam = Number(this.props.match.params.userId);
    const postIdParam = Number(this.props.match.params.postId);
    const searchedPost = this.props.posts.find(post => post.id === postIdParam);
    const { user, posts } = this.props;
    return (
      <Wrapper>
        <StyledUserNavWrapper>
          <UserNav
            userIdParam={userIdParam}
            postIdParam={postIdParam}
            userName={user.name}
          />
        </StyledUserNavWrapper>
        <StyledUserMainWrapper>
          {/* if there is postIdParam print PostDetailsContainer, if not print all Posts */}
          {postIdParam ? (
            <PostDetailsContainer post={searchedPost} />
          ) : (
            <Posts posts={posts} />
          )}
        </StyledUserMainWrapper>
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
