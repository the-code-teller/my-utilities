import React from "react";

const InputRange = ({ label, min, max, value, onChange, className }) => {
  return (
    <label className={`${className} flex items-center gap-2 text-nowrap`}>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='w-full'
      />
      {label}
    </label>
  );
};

export default InputRange;
