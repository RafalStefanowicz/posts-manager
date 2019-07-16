import React from "react";
import { connect } from "react-redux";
import fetchPosts from "../../actions/fetchPosts";
import InfoPage from "../InfoPage/InfoPage";
import Loader from "../Loader/Loader";
import { getDisplayName } from "../../helpers/helpers";

const withUserPosts = Component => {
  class WithUserPosts extends React.Component {
    componentDidMount() {
      // prevent fetching when user manually entered url(param) of not existing userId
      // prevent fetching when user's posts ale already fetched
      if (this.props.error.userNotFound || this.props.arePostsFetched) return;
      this.props.fetchPosts(this.props.user.id);
    }

    render() {
      const { user, posts, error, arePostsFetched } = this.props;
      // if user manually entered url(param) of not existing userId
      if (error.userNotFound)
        return <InfoPage>There is no user with this Id</InfoPage>;

      // if user manually entered url(param) of not existing postId
      if (error.postNotFound)
        return <InfoPage>User doesn't have this post.</InfoPage>;

      return arePostsFetched ? (
        <Component user={user} posts={posts} {...this.props} />
      ) : (
        <Loader />
      );
    }
  }

  WithUserPosts.displayName = `WithUserPosts(${getDisplayName(Component)})`;

  const mapStateToProps = (state, props) => {
    const paramUserId = Number(props.match.params.userId);
    const paramPostId = Number(props.match.params.postId);
    const error = { usetNotFound: false, postNotFound: false };

    const user = state.users[paramUserId];
    error.userNotFound = !user;

    const userPosts = state.posts.filter(
      post => post.userId === Number(paramUserId)
    );

    const arePostsFetched = state.dataFetched.postsFromUser.includes(
      paramUserId
    );

    if (
      arePostsFetched &&
      paramPostId &&
      !userPosts.find(post => post.id === paramPostId) // check if user has searched post
    ) {
      error.postNotFound = true;
    }

    return { user, posts: userPosts, error, arePostsFetched };
  };
  const mapDispatchToProps = { fetchPosts };
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithUserPosts);
};

export default withUserPosts;
