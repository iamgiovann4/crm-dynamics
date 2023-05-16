import React from 'react';
import './Landpage.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../images/Dynamics.png'
import prototipo from '../images/prototipo avançado pag de produtos 7.png'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';




const Landpage = () => {
    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{boxShadow:'none',}}>
        <Toolbar sx={{backgroundColor:'#fff',}}>
          <Typography sx={{ flexGrow: 0.9 }}>
            <img src={Logo} alt="" />
          </Typography>
          <strong><Link to={`/login`} style={{color:"#000", textDecoration:"none"}}>Entrar</Link></strong>
        </Toolbar>
      </AppBar>
    </Box>
        <Box sx={{
            width:'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <h2 style={{color:'#000',marginBottom: 0 , fontSize:32}}>Simplifique sua Administração</h2>
            <h2 style={{color:'#000',marginTop: 0 , fontSize:32}}>com Nossa Plataforma</h2>
            <h2 style={{color:'#000', marginBottom: 0 , fontSize:20 }}>Com a nossa plataforma de e-commerce, </h2>
            <h2 style={{color:'#000', marginBottom: 0 , marginTop: 0 , fontSize:20 }}>oferecemos-lhe a oportunidade de criar e gerenciar a</h2>
            <h2 style={{color:'#000', marginTop: 0 , fontSize:20 }}>sua loja online.</h2>
            <Button  sx={{width:400, height:60,borderRadius: 10, marginBottom: 5 }}><h2><Link to={`/cadastro`} style={{color:"#fff", textDecoration:"none"}}>Cadastre-se</Link></h2></Button>
            <img src={prototipo} alt="prototipo" />
        </Box>
        </>
    );
};
export default Landpage;

