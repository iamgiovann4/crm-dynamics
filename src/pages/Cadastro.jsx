import React from 'react';
import sha256 from 'sha256';

import Logo from "../images/Dynamics.png"
import Quadrados from "../images/quadrados.png"
import './Cadastro.css'
import FormCadastro from '../components/FormCadastro';
import { Grid, Paper, TextField, Box } from '@mui/material';

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

  } catch (error) {
    console.log("deu merda: " + error)
  }
}
//===========================

const Cadastro = () => {

  return (
    <Grid container spacing={2} sx={{ height: '100%' }}>
      <Grid item xs={4} style={{ backgroundColor: "#252525", display: "flex", alignItems: "center", height: "100%", }}>
        <img style={styles.img} src={Quadrados} alt={'detalhes'} />
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ paddingTop: '30px', }}>
          <Box sx={{ display: "flex", justifyContent: "center", }}>
            <img style={styles} src={Logo} alt={'detalhes'} />
          </Box>
          <Box sx={{ height: "100%" }}>
            <Grid container spacing={2} sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Grid item xs={6}>
                <TextField label="Nome" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Sobrenome" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="CPF" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Email" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Senha" variant="outlined" fullWidth />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid >
  );
}

export default Cadastro;

const styles = {
  img: {
    height: "50%",
    position: "absolute"
  }
}