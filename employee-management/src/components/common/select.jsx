import React from 'react';

function Select({ label, name, value, lookup, onChange, error }) {

    return(
        <div className="form-group col">
          <label htmlFor={label}>{label}</label>
          <select onChange={onChange} value={value} className="form-control" id={name}>
            {lookup && lookup.map((opt) => (<option key={opt.id}>{opt.name}</option>))}
          </select>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Select;