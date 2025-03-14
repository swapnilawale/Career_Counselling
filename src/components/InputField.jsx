import React from "react";
import "../styles/InputField.css";

const InputField = ({ label, type, ...rest }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input type={type} className="input-field" {...rest} />
    </div>
  );
};

export default InputField;
