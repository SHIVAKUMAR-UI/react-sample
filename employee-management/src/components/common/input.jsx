import React from "react";

const Input = ({ label, name, type, value, onChange, error }) => {
  return (
    <div className="form-group col">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
