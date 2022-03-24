import React from 'react';
import './valid.scss';

const Valid = (probs) => {
    return (
        <div className='mainContainer'>
            {/* <label>Username</label> */}
            <input 
            type="text" 
            placeholder={probs.placeholder}
            onChange={(e)=>probs.setUsername(e.target.value)}
            />
        </div>
    );
}

export default Valid;
