import React from 'react';
import sha256 from 'sha256';

import Logo from "../images/Dynamics.png"
import Quadrados from "../images/quadrados.png"
import './Cadastro.css'
import { Grid, TextField, Box } from '@mui/material';

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
  const user = { fname, lname, office, cpf, password, email }
  console.log(user)
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

  return (
    <Grid container spacing={2} sx={{ height: '100%', }}>
      <Grid item xs={4} style={{ backgroundColor: "#252525", display: "flex", alignItems: "center", height: "100%", }}>
        <img style={styles.img} src={Quadrados} alt={'detalhes'} />
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ paddingTop: '30px', height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10%" }}>
          <Box sx={{ display: "flex", justifyContent: "center", }}>
            <img style={styles.logo} src={Logo} alt={'logo'} />
          </Box>
           <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", }}>
              <Grid container spacing={2} sx={{ display: "flex", alignItems: "center", height: "100%", width: "70%", }}>
                <Grid item xs={6}>
                  <TextField name='lname' label="Nome" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField name='fname' label="Sobrenome" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField name='office' label="office" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField name='cpf' label="cpf" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField name='password' label="Senha" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField name='email' label="email" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <div style={styles.centralizar}>
                    <button style={styles.enviar} className='enviar'>Cadastrar</button><br />
                  </div>
                </Grid>
              </Grid>
            </form>
        </Box>
      </Grid>
    </Grid >
  );
}

export default Cadastro;

const styles = {
  img: {
    height: "50%"
  },
  logo: {
    width: "350px"
  },
  enviar: {
    height: "45px",
    border: "0",
    borderRadius: "15px",
    color: "#fff",
    fontSize: "25px",
    fontWeight: "bold",
    textAlign: "center",
    width: "30%",
    background: "linear-gradient(90deg, #0070C0 0%, rgba(15, 154, 254, 0.7) 100%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    margintop: "20px"
  },
  centralizar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}
