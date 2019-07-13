import React from "react";
import { connect } from "react-redux";

import fetchPostComments from "../../../actions/fetchPostComments";
const withComments = Component => {
  class WithComments extends React.Component {
    componentDidMount() {
      this.props.fetchPostComments(this.props.post.id);
    }
    render() {
      return <Component {...this.props} comments={this.props.comments} />;
    }
  }

  const mapStateToProps = state => ({ comments: state.comments });
  const mapDispatchToProps = { fetchPostComments };
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithComments);
};

export default withComments;
