import React from "react";

const Button = ({ type, className, backgroundColor, onClick, value }) => {
  return (
    <button
      onClick={(e) => onClick(e.target.value)}
      value={value}
      type={type}
      className={`border rounded-2xl w-24 text-gray-100 ${className}`}
      style={{ backgroundColor }}
    >
      {value.toUpperCase()}
    </button>
  );
};

export default Button;
