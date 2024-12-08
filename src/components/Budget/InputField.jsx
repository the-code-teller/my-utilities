import React from "react";

const InputField = ({ label, type, name, value, onChange, placeholder, options, show, required }) => {
  if (!show) return null;

  return (
    <div className="flex items-center mb-4">
      <label className="w-1/3 text-sm font-medium text-gray-700">{label}</label>
      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-2/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "radio" ? (
        <div className="w-2/3 flex items-center">
          {options.map((option) => (
            <label key={option} className="mr-4">
              <input
                type="radio"
                name={name}
                value={option}
                checked={value === option}
                onChange={onChange}
                required={required}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-2/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      )}
    </div>
  );
};

export default InputField;
