import React from "react";

const InputCheckbox = ({ name, label, checked, onChange, className }) => {
  return (
    <label className={`${className} flex items-center`}>
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      {label}
    </label>
  );
};

export default InputCheckbox;
