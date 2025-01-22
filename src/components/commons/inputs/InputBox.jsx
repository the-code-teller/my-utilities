import React, { forwardRef } from "react";
import InputWrapper from "../wrappers/InputWrapper";

const InputBox = forwardRef(
  (
    {
      type = "text",
      name,
      value,
      onChange,
      placeholder,
      className,
      readOnly,
      label,
      labelClassName,
    },
    ref
  ) => {
    return (
      <InputWrapper label={label} name={name} className={labelClassName}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`focus:outline-none ${className}`}
          readOnly={readOnly}
          ref={ref}
        />
      </InputWrapper>
    );
  }
);

export default InputBox;
