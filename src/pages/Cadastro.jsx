import React from 'react';
import sha256 from 'sha256';

import Logo from "../images/Dynamics.png"
import Quadrados from "../images/quadrados.png"
import './Cadastro.css'
import FormCadastro from '../components/FormCadastro';

//===========================
export const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Minha funcao de submit')
    console.log(event.target)
    const fname = event.target.fname.value 
    const lname = event.target.lname.value
    const office = event.target.office.value
    const cpf = event.target.cpf.value
    const senha = event.target.password.value
    const salt = '0912743';
    const password = sha256(senha + salt);
    const email = event.target.email.value
    const user = {fname, lname, office, cpf, password, email}
    console.log( user)
    try {
      const response = await fetch('http://localhost:3100/user',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), 
      })
      const data = await response.json()
      console.log(data)
      if (data.message === "Dados inválidos") {
        alert('Usuário NÃO cadastrado');
      } else {
        alert('Usuário cadastrado');
      }
    } catch (error) {
      console.log("deu merda: " + error)
    }
  }
//===========================

const Cadastro = () => {
    
    return(
        <>
            <div className='wrapper'>
                <div className='caixa1'>
                 <img src={Quadrados} alt="Quadrados" height={'530px'} />
                </div>{/*  .caixa1 */}
                <div className="caixa2">
                    <img src={Logo} alt="Logo" />
                    <div className='welcome'>
                        <h2>Bem Vindo</h2>
                        <h3>Administre sua empresa em uma plataforma <span style={{color:'#0F9AFE'}}>Confiavel</span> </h3>
                        
                        <FormCadastro/>
                        
                        <div className='linkLogin'>
                            <h2>Já tem uma conta? <a href="/produtos">Entrar</a></h2>
                        </div>{/*  .linkLogin */}
                    </div>{/*  .welcome */}
                </div>{/*  .caixa2 */}
            </div>{/*  .wrapper */}
        </>
    );
};

export default Cadastro;
