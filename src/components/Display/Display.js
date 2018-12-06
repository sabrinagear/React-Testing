import React from "react";
import PropTypes from "prop-types";
import "./Display.css";

const Display = ({ value }) => {
  return (
    <div className="display">
      <div>{value}</div>
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.string
};

export default Display;
