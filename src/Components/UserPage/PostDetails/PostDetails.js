import React from "react";
import PropTypes from "prop-types";

import Comments from "./Comments/Comments";
import {
  StyledButtonWrapper,
  StyledPostWrapper,
  StyledTitle,
  StyledButton
} from "./postDetailsStyle";

const PostDetails = props => {
  const {
    post,
    areCommentsVisible,
    toggleCommentsVisible,
    handleAddComments
  } = props;

  return (
    <div>
      <StyledPostWrapper>
        <StyledTitle>{post.title}</StyledTitle>
        <p>{post.body}</p>
        <StyledButtonWrapper>
          <StyledButton onClick={toggleCommentsVisible}>{`${
            areCommentsVisible ? "Hide" : "Show"
          } comments`}</StyledButton>
          <StyledButton onClick={handleAddComments}>Add comments</StyledButton>
        </StyledButtonWrapper>
        {areCommentsVisible ? <Comments post={post} /> : null}
      </StyledPostWrapper>
    </div>
  );
};

PostDetails.propTypes = {
  post: PropTypes.object.isRequired,
  areCommentsVisible: PropTypes.bool.isRequired,
  toggleCommentsVisible: PropTypes.func.isRequired,
  handleAddComments: PropTypes.func.isRequired
};

export default PostDetails;
