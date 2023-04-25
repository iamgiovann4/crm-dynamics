import AbrirModal from "../components/Model";
import React, { useState } from 'react';

function Produtos() {
    const [exibirComponente, setExibirComponente] = useState(false);
  
    const handleClick = () => {
      setExibirComponente(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Exibir componente</button>
        {exibirComponente && <AbrirModal />}
      </div>
    );
  }

export default Produtos