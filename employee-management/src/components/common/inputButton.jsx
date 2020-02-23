import React from 'react';

const InputButton = ({ name, onClick}) => {
    return ( 
        <input type="button" className="btn btn-primary" onClick={onClick} value={name} />
     );
}
 
export default InputButton;