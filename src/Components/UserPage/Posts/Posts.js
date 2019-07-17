import React from "react";
import PropTypes from "prop-types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import DeletePostBtn from "../../DeletePostBtn/DeletePostBtn";
import { StyledItem, StyledLink, StyledFontAwesomeIcon } from "./postsStyle";

const Posts = props => {
  const postItems = props.posts.map(post => {
    const { userId, id: postId, title } = post;
    return (
      <StyledItem key={postId}>
        <DeletePostBtn postId={postId} userId={userId} />
        <StyledLink to={`/user/${userId}/${postId}`}>
          <h2>{title}</h2>
          <StyledFontAwesomeIcon icon={faArrowRight} />
        </StyledLink>
      </StyledItem>
    );
  });
  return <ul>{postItems}</ul>;
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
