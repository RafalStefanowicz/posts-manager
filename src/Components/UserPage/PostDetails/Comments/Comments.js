import React from "react";
import PropTypes from "prop-types";

import withComments from "./withComments";
import {
  StyledItem,
  StyledInputWrapper,
  StyledName,
  StyledEmail,
  StyledComment
} from "./CommentsStyle";

const Comments = props => {
  const comments = props.comments;
  const commentsItems = comments.map(comment => {
    return (
      <StyledItem key={comment.id}>
        <StyledInputWrapper>
          <StyledName>{comment.name}</StyledName>
          <StyledEmail>{comment.email}</StyledEmail>
        </StyledInputWrapper>
        <StyledComment>{comment.body}</StyledComment>
      </StyledItem>
    );
  });
  return <ul>{commentsItems}</ul>;
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default withComments(Comments);
