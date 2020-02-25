import React from "react";

function TextArea({ label, name, value, onChange, error }) {
  return (
    <div class="form-group col">
      <label for={label}>{label}</label>
      <textarea
        class="form-control"
        id={name}
        value={value}
        onChange={onChange}
        rows="3"
      ></textarea>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default TextArea;
