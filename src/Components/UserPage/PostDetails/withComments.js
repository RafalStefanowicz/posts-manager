import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import InfoPage from "../../InfoPage/InfoPage";
import Loader from "../../Loader/Loader";
import { getDisplayName } from "../../../helpers";
import fetchPostComments from "../../../actions/fetchPostComments";
const withComments = Component => {
  class WithComments extends React.Component {
    componentDidMount() {
      //only fetch if there is post
      if (this.props.post) {
        this.props.fetchPostComments(this.props.post.id);
      }
    }
    render() {
      const comments = this.props.comments;
      // if the user manually entered url/param of not existing post, this.props.post will be undefinded
      if (!this.props.post)
        return <InfoPage>Użytkownik nie ma posta o takim id.</InfoPage>;

      return comments ? (
        <Component {...this.props} comments={this.props.comments} />
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
    // check if there is post in props
    const postId = props.post && props.post.id;
    return { comments: state.comments[postId] };
  };
  const mapDispatchToProps = { fetchPostComments };
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithComments);
};

export default withComments;
