import React, { useState } from 'react';
import Modal from '../components/Modal';

function Produtos() {
    const [abrirModal, setAbrirModal] = useState(false);

    const AbrirModal = () => {
      setAbrirModal(true)
    }

    const FecharModal = () => {
      setAbrirModal(false)
    }

    return (
      <div>
        <h1>Páginas de Produtos</h1>
        <button onClick={AbrirModal}>Abrir Modal</button>
        {abrirModal ? 
        <Modal onClose = {FecharModal}>
          <h4>Olá, sou o Modal</h4>
        </Modal> : null}
      </div>
    );
  }

export default Produtos