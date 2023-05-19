import React from 'react';
import { Grid, TextField, Box } from '@mui/material';

import Logo from "../images/Dynamics.png"
import Silhueta from "../images/silhuetaLogin.png"
import Button from "../components/Button"


const Login = () => {
    return (
        <>
            <Grid container spacing={2} sx={{ height: '100%', }}>
                <Grid item xs={12}>
                    <Box sx={{ backgroundColor: "#f5f5f5", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", paddingTop: "50px" }}>
                        <img style={styles.img} src={Logo} alt={'Logo'} />
                    </Box>
                    <Box style={{ backgroundColor: "#f5f5f5", display: "flex", alignItems: "center", height: "100%", flexDirection: "column", justifyContent: "center" }}>

                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: "40px", borderRadius: "20px", }}>
                            <Box sx={{ marginTop: "-100px" }}>
                                <img style={styles.silhueta} src={Silhueta} alt={'silhueta'} />
                            </Box>
                            <form style={{ padding: "100px" }}>
                                <Grid item xs={12}>
                                    <TextField id="standard-basic" label="CPF" variant="standard" sx={{ width:'30vh' }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField id="standard-basic" label="Senha" variant="standard" sx={{ width:'30vh' }} />
                                </Grid> <br />
                                <div style={{ width: "100%" }}><br /><Button> Entrar </Button></div>
                                {/* <button style={styles.enviar} className='enviar'>Entrar</button><br /> */}
                            </form>

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
