import React from "react";
import { withRouter } from "react-router-dom";

const BackButton = props => {
  const handleClick = () => {
    props.history.push(props.path);
  };
  return <button onClick={handleClick}>Cofnij</button>;
};
export default withRouter(BackButton);
