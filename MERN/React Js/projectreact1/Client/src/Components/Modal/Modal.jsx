import React,{useState} from 'react';
import './Modal.css';
import Model from '../Model/Model';

const Modal = () => {

    const [openModal, setOpenModal] = useState(false);
    return (
        <div className='main-container'>
            <h2>Modal</h2>
            
            <button 
            className='modalBtn' 
            onClick={()=>{setOpenModal(true)}}>
                Open
                </button>
            {openModal && <Model closeModal={setOpenModal}/>}
        </div>
    );
}

export default Modal;


