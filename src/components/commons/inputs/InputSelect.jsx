import React from "react";
import InputWrapper from "../wrappers/InputWrapper";

const InputSelect = ({ options, onChange, value, name, label, className }) => {
  return (
    <InputWrapper label={label} name={name}>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
};

export default InputSelect;
