import React from 'react';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';

import Logo from "../images/Dynamics.png"
import Silhueta from "../images/silhuetaLogin.png"
import Button from "../components/Button"
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Grid container spacing={2} sx={{ height: '100%', }}>
                <Grid item xs={12}>
                    <Box sx={{ backgroundColor: "#f5f5f5", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", paddingTop: "50px" }}>
                        <img src={Logo} alt={'Logo'} />
                    </Box>
                    <Box style={{ backgroundColor: "#f5f5f5", display: "flex", alignItems: "center", height: "100%", flexDirection: "column", justifyContent: "center" }}>

                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: "40px", borderRadius: "20px", }}>
                            <Box sx={{ marginTop: "-100px" }}>
                                <img style={styles.silhueta} src={Silhueta} alt={'silhueta'} />
                            </Box>
                            <form sx={{ m: 1, width: '25ch', padding: "100px" }}>
                                <Grid item xs={12}>
                                    <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
                                        <TextField id="standard-basic" label="CPF" variant="standard" sx={{ width: '100%' }} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ m: 1, width: '100%' }} variant='standard'>
                                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            name='standard-adornment-password'
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>

                                </Grid> <br />
                                <div style={{ width: "100%" }}><br /><Button> Entrar </Button></div>
                                <h3>Não tem uma conta? <span> <Link to={`/cadastro`} style={{ color: "#0070C0" }}>Cadastre-se</Link> </span> </h3>
                            </form >
                        </Box>
                    </Box>
                </Grid>
            </Grid >
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
