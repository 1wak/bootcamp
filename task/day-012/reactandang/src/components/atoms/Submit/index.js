import React from "react";
import "./Submit.css";

const Submit = ({ title, ...rest }) => {
  return (
    <button class="button button--submit" {...rest}>
      {title}
    </button>
  );
};

export default Submit;
