import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { ADD_COMMENT_MODAL } from "../../../constants/modalTypes";
import showModal from "../../../actions/showModal";
import PostDetails from "./PostDetails";

class PostDetailsContainer extends Component {
  state = { areCommentsVisible: false };

  handleAddComments = () => {
    const { showModal, post } = this.props;
    showModal(ADD_COMMENT_MODAL, { postId: post.id });
  };

  toggleCommentsVisible = () => {
    this.setState(prevState => ({
      areCommentsVisible: !prevState.areCommentsVisible
    }));
  };

  render() {
    const { post } = this.props;
    return (
      <PostDetails
        post={post}
        areCommentsVisible={this.state.areCommentsVisible}
        handleAddComments={this.handleAddComments}
        toggleCommentsVisible={this.toggleCommentsVisible}
      />
    );
  }
}

PostDetails.propTypes = {
  post: PropTypes.object.isRequired
};

const mapDispatchToProps = { showModal };
export default connect(
  null,
  mapDispatchToProps
)(PostDetailsContainer);
