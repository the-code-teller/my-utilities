import React from "react";

const Button = ({ type, className, backgroundColor, onClick, value }) => {
  return (
    <button
      onClick={(e) => onClick(e.target.value)}
      value={value}
      type={type}
      className={className}
      style={{ backgroundColor }}
    >
      {value}
    </button>
  );
};

export default Button;
