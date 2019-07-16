import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Loader from "../../../Loader/Loader";
import { getDisplayName } from "../../../../helpers/helpers";
import fetchComments from "../../../../actions/fetchComments";
import InfoPage from "../../../InfoPage/InfoPage";

const withComments = Component => {
  class WithComments extends React.Component {
    componentDidMount() {
      // prevent fetching when user's comments ale already fetched
      if (!this.props.areCommentsFetched) {
        this.props.fetchComments(this.props.post.id);
      }
    }
    render() {
      const { areCommentsFetched, comments } = this.props;

      // if comments are already fetched and there were no comments
      if (areCommentsFetched && !comments.length)
        return <InfoPage>The user has no comments.</InfoPage>;

      return areCommentsFetched ? (
        <Component {...this.props} comments={comments} />
      ) : (
        <Loader />
      );
    }
  }

  WithComments.displayName = `WithComments(${getDisplayName(Component)})`;

  WithComments.propTypes = {
    post: PropTypes.object
  };

  const mapStateToProps = (state, props) => {
    const postId = props.post.id;
    // pass only comments of active post
    const comments = state.comments.filter(
      comment => comment.postId === postId
    );
    const areCommentsFetched = state.dataFetched.commentsFromPost.includes(
      postId
    );
    return { comments, areCommentsFetched };
  };
  const mapDispatchToProps = { fetchComments };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithComments);
};

export default withComments;
