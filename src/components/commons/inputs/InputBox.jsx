import React, { forwardRef } from "react";

const InputBox = forwardRef(({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  className,
  readOnly,
}, ref) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border border-gray-300 p-2 w-full focus:outline-none ${className}`}
      readOnly={readOnly}
      ref={ref}
    />
  );
});

export default InputBox;
