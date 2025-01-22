import React from "react";

const InputWrapper = ({ children, label, name, className }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={name} className={className}>
          {label}
        </label>
      )}
      {children}
    </div>
  );
};

export default InputWrapper;
