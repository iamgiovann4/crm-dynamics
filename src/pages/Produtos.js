import Modal from 'react-modal';
import React, { useState } from 'react';

Modal.setAppElement('#root')

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
        <button onClick={AbrirModal}>Abrir Modal</button>

        <Modal 
          isOpen={abrirModal}
          onRequestClose={FecharModal}
        >
          <h1>Hello Modal</h1>
          <p>Testando o modal para o projeto</p>
          <button onClick={FecharModal}>Fechar</button>
        </Modal>
      </div>
    );
  }

export default Produtos