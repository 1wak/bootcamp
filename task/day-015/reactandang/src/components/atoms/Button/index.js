import React from "react";
import "./Button.css";

const Button = ({ title, ...rest }) => {
  return (
    <button {...rest} className="btn btn-primary pr-5 pl-5 tombol">
      {title}
    </button>
  );
};

export default Button;
