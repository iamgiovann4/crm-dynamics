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
                <input type="text" name="nome"  placeholder="Nome"/><br/>
                <input type="text" name="preco"  placeholder="Preço"/><br/>
                <input type="int" name="qtd"  placeholder="Quantidade"/><br/><br/>
                <button className='enviar'>Enviar</button><br/>
                <button className='fechar' onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default Modal;