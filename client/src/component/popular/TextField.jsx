import React from "react";

const TextField = ({
  title,
  name,
  type = "text",
  value = "",
  onChange,
  onBlur,
  input, 
  error,
  touched,
  placeholder,
}) => {
  const handleChange = (e) => {
    onChange?.(e);
    input?.(e.target.value); 
  };

  return (
    <div className="mt-4">
      {title && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          {title}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        // placeholder={placeholder || title}
        className={`block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 ${
          error && touched ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && touched && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default TextField;
