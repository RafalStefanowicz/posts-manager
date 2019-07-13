import React, { Component } from "react";

import withUser from "./withUserPosts/withUserPosts";
import UserNav from "./UserNav/UserNav";
class UserPage extends Component {
  userId = this.props.match.params.userId;
  postId = this.props.match.params.postId;

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    const { user } = this.props;
    return (
      <UserNav userId={this.userId} postId={this.postId} userName={user.name} />
    );
  }
}

export default withUser(UserPage);
