import React from "react";

const Button = ({ type, className, backgroundColor, onClick, children }) => {
  return (
    <button
      onClick={(e) => onClick(e.target.value)}
      type={type}
      className={className}
      style={{ backgroundColor }}
    >
      {children}
    </button>
  );
};

export default Button;
