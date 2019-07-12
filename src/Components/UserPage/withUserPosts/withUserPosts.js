import React from "react";
import { connect } from "react-redux";

import fetchUserPosts from "../../../actions/fetchUserPosts";

const withUserPosts = Component => {
  class WithUserPosts extends React.Component {
    componentDidMount() {
      this.props.fetchUserPosts(this.props.user.id);
    }
    render() {
      return (
        <Component
          user={this.props.user}
          posts={this.props.posts}
          {...this.props}
        />
      );
    }
  }
  const mapStateToProps = (state, props) => {
    const userId = props.match.params.userId;
    const user = state.users[userId] || null;
    return { user, posts: state.posts };
  };
  const mapDispatchToProps = { fetchUserPosts };
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithUserPosts);
};

export default withUserPosts;
