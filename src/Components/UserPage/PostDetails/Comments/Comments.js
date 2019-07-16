import React from "react";
import PropTypes from "prop-types";

import withComments from "./withComments";
import {
  CommentItem,
  UserDetailsWrapper,
  StyledName,
  StyledEmail,
  StyledComment
} from "./CommentsStyle";

const Comments = props => {
  const comments = props.comments;
  const commentsItems = comments.map(comment => {
    return (
      <CommentItem key={comment.id}>
        <UserDetailsWrapper>
          <StyledName>{comment.name}</StyledName>
          <StyledEmail>{comment.email}</StyledEmail>
        </UserDetailsWrapper>
        <StyledComment>{comment.body}</StyledComment>
      </CommentItem>
    );
  });
  return <ul>{commentsItems}</ul>;
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default withComments(Comments);
