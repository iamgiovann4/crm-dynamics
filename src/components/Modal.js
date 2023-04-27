import React from 'react';
import './Modal.css'

const Modal = ({id, onClose, children}) => {
    const idModalFechar = (e) => {
        if (e.target.id === 'modal') {
            onClose()
        }
    }
    return(
        <div id='modal' className='modal' onClick={idModalFechar}>
            <div className='container'>
                {children}
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default Modal;