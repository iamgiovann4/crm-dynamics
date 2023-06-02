import React from 'react'
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Logo from "../images/Dynamics.png"
import Quadrados from "../images/quadrados.png"
import './Cadastro.css'
import Button from "../components/Button"
import { Link } from 'react-router-dom';
import Content from '../components/Content';

//===========================
const handleSubmit = async (event) => {
  event.preventDefault()
  console.log('Minha funcao de submit')
  console.log(event.target)
  const fname = event.target.fname.value
  const lname = event.target.lname.value
  const office = event.target.office.value
  const cpf = event.target.cpf.value
  const password = event.target.password.value;
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

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Content>
    <Grid width={"auto"} container spacing={2} sx={{ height: '100%', margin: '0%' }}>
      <Grid item xs={4} style={{ backgroundColor: "#313131", display: "flex", alignItems: "center" }}>
        <img style={styles.img} src={Quadrados} alt={'detalhes'} />
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
          <Box sx={{ display: "flex", justifyContent: "center", }}>
            <img style={styles.logo} src={Logo} alt={'logo'} />
          </Box>
          <h2 style={{ fontSize: "34px", color: "#252525" }}>Bem-vindo</h2>
          <h3 ><span style={{ color: "#000", opacity: "50%" }}>Administre  sua empresa em uma plataforma </span> <span style={{ color: "#0070C0", }}>Confiável</span></h3>
          <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", }}>
            <Grid container spacing={2} sx={{ height: "100%", width: "70%", }}>
              <Grid item xs={6}>
                <FormControl sx={{ width: '100%' }} variant='outlined'>
                  <TextField name='fname' label="Nome" variant="outlined" fullWidth />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ width: '100%' }} variant='outlined'>
                  <TextField name='lname' label="Sobrenome" variant="outlined" fullWidth />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }} variant='outlined'>
                  <TextField name='office' label="Profissão" variant="outlined" fullWidth />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }} variant='outlined'>
                  <TextField name='cpf' label="CPF" variant="outlined" fullWidth />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }} variant='outlined'>
                  <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password" name="password"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }} variant='outlined'>
                  <TextField name='email' label="E-mail" variant="outlined" fullWidth />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <div style={styles.centralizar}>
                  <div style={{ width: "30%" }}><Button>Cadastrar</Button><br /></div>

                  <h2 style={{color: '#252525'}}>Já tem uma conta? <span style={{ color: "#0070C0" }}> <Link to={`/login`} style={{ color: "#0070C0", textDecoration: 'none' }}>Entrar</Link> </span> </h2>
                </div>

              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid >
    </Content>
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

