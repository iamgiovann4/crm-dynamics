import React from 'react';
import Logo from "../images/Dynamics.png"
import Quadrados from "../images/quadrados.png"
// import Form from "../images/form.png"
import './Cadastro.css'
import FormCadastro from '../components/FormCadastro';

const Cadastro = () => {
    
    return(
        <>
            <div className='wrapper'>
                <div className='caixa1'>
                 <img src={Quadrados} alt="Quadrados" height={'530px'} />
                </div>
                <div className="caixa2">
                    <img src={Logo} alt="Logo" />
                    
                    <div className='welcome'>
                        <h2>Bem Vindo</h2>
                        <h3>Administre sua empresa em uma plataforma <span style={{color:'#0F9AFE'}}>Confiavel</span> </h3>
                        
                        <FormCadastro/>
                        
                        <div>
                            <h2>Já tem uma conta? <a href="/produtos">Entrar</a></h2>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Cadastro;
