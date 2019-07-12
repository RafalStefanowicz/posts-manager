import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
  return (
    <div>
      <h1>
        <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
        Logowanie..
      </h1>
    </div>
  );
};
export default Loader;
