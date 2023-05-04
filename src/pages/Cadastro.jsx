import React from 'react';
import Logo from "../images/Dynamics.png"
import './Cadastro.css'

const Cadastro = () => {
    
    return(
        <>
            <div className='wrapper'>
                <div className='caixa1'>
                </div>
                <div className="caixa2">
                    <img src={Logo} alt="Mountain" />
                    
                    <div className='welcome'>
                        <h2>Bem Vindo</h2>
                        <h3>Administre sua empresa em uma plataforma <span style={{color:'#0F9AFE'}}>Confiavel</span> </h3>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Cadastro;
