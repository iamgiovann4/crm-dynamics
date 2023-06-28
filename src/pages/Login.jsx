import React from 'react';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Simbolo from "../images/simbolo.png"
import Button from "../components/Button"
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import useAuthStore from '../store/authStore';
import Content from '../components/Content';
import { toast } from 'react-toastify';
import { API_SERVER } from '../config'
import './Login.css'

const Login = () => {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const cpf = event.target.cpf.value
    const password = event.target.password.value
    const user = { cpf, password }
    try {
      const response = await fetch(`${API_SERVER}/auth/login`, //http://localhost:3100
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),

        })
      const data = await response.json()

      console.log(data)
      if (response.status === 200) {
        //logar
        login(data.token, data.user)
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        const { fname } = data.user
        navigate('/home')
        toast.success(`Bem-vindo ${fname}`)
      } else {
        toast.error('Senha ou cpf incorreto, por favor tente novamente')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Content>
        <Grid container spacing={2} sx={{ padding: '0px' , marginTop: '0' }} className='teste'>
          <Grid width={"auto"} item xs={12} sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0' }}>
            <Box style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", padding: "0px" }}>
              <Box className='contentForm' sx={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#ffffffdb", padding: "40px", borderRadius: "20px", }}>
                <Box sx={{ marginTop: '-120px' }}>
                  <img style={styles.silhueta} src={Simbolo} alt={'silhueta'} />
                </Box>
                <form sx={{ m: 1, width: '25ch', padding: "100px" }} onSubmit={handleSubmit}>
                  <Grid item xs={12}>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
                      <TextField id="standard-basic" label="CPF" name='cpf' variant="standard" sx={{ width: '100%' }} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl sx={{ m: 1, width: '100%' }} variant='standard'>
                      <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                      <Input
                        id="standard-adornment-password"
                        name='password'
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}>
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        } />
                    </FormControl>
                  </Grid> <br />
                  <div style={{ width: "100%" }}><br /><Button>Entrar</Button></div>
                  <h3 style={{ fontSize: "20px" }}>Não tem uma conta? <span> <Link to={`/cadastro`} style={{ color: "#0070C0", textDecoration: 'none' }}>Cadastre-se</Link> </span> </h3>
                </form >
              </Box>
            </Box>
          </Grid>
        </Grid >
      </Content>
    </>
  );
}

export default Login;

const styles = {
  enviar: {
    height: "45px",
    border: "0",
    borderRadius: "15px",
    color: "#fff",
    fontSize: "25px",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    background: "linear-gradient(90deg, #0070C0 0%, rgba(15, 154, 254, 0.7) 100%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    margintop: "20px",
  },
  silhueta: {
    maxWidth: "100%",
    height: "auto",
    padding: 0,
    margin: 0
  }
}
