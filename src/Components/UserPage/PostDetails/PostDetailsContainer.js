import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";

import { ADD_COMMENT_MODAL } from "../../../constants/modalTypes";
import showModal from "../../../actions/showModal";
import withComments from "./withComments";
import PostDetails from "./PostDetails";

class PostDetailsContainer extends Component {
  state = { commentsVisible: false };
  handleAddComments = () => {
    const { showModal, post } = this.props;
    showModal(ADD_COMMENT_MODAL, { postId: post.id });
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

const mapDispatchToProps = { showModal };
export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withComments
)(PostDetailsContainer);
