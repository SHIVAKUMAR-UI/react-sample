import React from 'react';

const InputButton = ({ name, onClick}) => {
    return ( 
        <div className="text-right">
        <input type="button" className="btn btn-primary " onClick={onClick} value={name} />
        </div>
     );
}
 
export default InputButton;