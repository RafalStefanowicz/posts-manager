import React from "react";
import PropTypes from "prop-types";

import withComments from "./withComments";

const PostDetails = () => {
  return <div>PostDetails</div>;
};
PostDetails.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
};

export default withComments(PostDetails);
