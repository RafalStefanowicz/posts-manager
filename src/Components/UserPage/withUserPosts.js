import React from "react";
import { connect } from "react-redux";
import fetchUserPosts from "../../actions/fetchUserPosts";
import InfoPage from "../InfoPage/InfoPage";
import Loader from "../Loader/Loader";
import { getDisplayName } from "../../helpers/helpers";

const withUserPosts = Component => {
  class WithUserPosts extends React.Component {
    componentDidMount() {
      // prevent fetching when user manually entered url(param) of not existing id
      // prevent fetching when user's posts ale already fetched
      if (this.props.user && !this.props.posts) {
        this.props.fetchUserPosts(this.props.user.id);
      }
    }
    render() {
      const { user, posts } = this.props;
      // if user manually entered url(param) of not existing id
      if (user === null) return <InfoPage>Nie ma takiego użytkownika</InfoPage>;

      return posts ? (
        <Component user={user} posts={posts} {...this.props} />
      ) : (
        <Loader />
      );
    }
  }
  WithUserPosts.displayName = `WithUserPosts(${getDisplayName(Component)})`;

  const mapStateToProps = (state, props) => {
    const userId = props.match.params.userId;
    const posts = state.posts[userId];
    const user = state.users[userId] || null;
    return { user, posts };
  };
  const mapDispatchToProps = { fetchUserPosts };
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithUserPosts);
};

export default withUserPosts;
