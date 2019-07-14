import React, { Component } from "react";
import PropTypes from "prop-types";

import withComments from "./withComments";
import PostDetails from "./PostDetails";

class PostDetailsContainer extends Component {
  state = { commentsVisible: false };
  handleAddComments = () => {
    console.log("dodaj obsluge dodwania komentarzy");
  };
  toggleCommentsVisible = () => {
    this.setState(prevState => ({
      commentsVisible: !prevState.commentsVisible
    }));
  };
  render() {
    const { comments, post } = this.props;

    return (
      <PostDetails
        comments={comments}
        post={post}
        commentsVisible={this.state.commentsVisible}
        handleAddComments={this.handleAddComments}
        toggleCommentsVisible={this.toggleCommentsVisible}
      />
    );
  }
}

PostDetails.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
};
export default withComments(PostDetailsContainer);
