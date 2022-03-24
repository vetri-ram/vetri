import React from 'react';
import './Model.css';

const Model = ({closeModal}) => {
    return (
        <div className='model-maindiv'>
            <div className="model-subdiv">
                <div className="titleCloseBtn">
                <button className='' onClick={() => closeModal(false)}>X</button>
                </div>
                <div className="model-title">
                    <h2>Are You Sure You Want To Continue?</h2>
                </div>
                <div className="model-body">
                    <p>The Next Page is awesome! you Should move forward. you will enjoy it</p>
                </div>
                <div className="model-footer">
                    <button className='cancel-btn' id='cancelBtn' onClick={() => closeModal(false)}>Cancel</button>
                        <button className='submit-btn'>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Model;
