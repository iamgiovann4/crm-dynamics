import sha256 from 'sha256';
import React from 'react'

import Logo from "../images/Dynamics.png"
import Quadrados from "../images/quadrados.png"
import './Cadastro.css'
import Button from "../components/Button"
import { Grid, TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom';

//===========================
const handleSubmit = async (event) => {
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

const Cadastro = () => {

  return (
    <Grid container spacing={2} sx={{ height: '100%', }}>
      <Grid item xs={4} style={{ backgroundColor: "#252525", display: "flex", alignItems: "center", height: "100%", }}>
        <img style={styles.img} src={Quadrados} alt={'detalhes'} />
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
          <Box sx={{ display: "flex", justifyContent: "center", }}>
            <img style={styles.logo} src={Logo} alt={'logo'} />
          </Box>
          <h2 style={{ fontSize: "34px" }}>Bem Vindo</h2>
          <h3 > <span style={{ color: "#000000", opacity: "40%" }}>Administre  sua empresa em uma plataforma </span> <span style={{ color: "#0070C0", }}>Confiável</span></h3>
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
                  <div style={{width:"30%"}}><Button>Cadastrar</Button><br /></div>
                  
                  <h4>Já tem uma conta? <span style={{ color: "#0070C0" }}> <Link to={`/login`} style={{ color: "#0070C0" }}>Entrar</Link> </span> </h4>
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
  centralizar: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
}

