import React from 'react';
import './Landpage.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../images/Dynamics.png'
import prototipo from '../images/prototipo avançado pag de produtos 7.png'
import Button from '../components/Button';
import { Link } from 'react-router-dom';




const Landpage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ boxShadow: 'none', }}>
          <Toolbar sx={{ backgroundColor: '#fff', }}>
            <Typography sx={{ flexGrow: 0.9 }}>
              <img src={Logo} alt="" />
            </Typography>
            <strong><Link to={`/login`} style={{ color: "#000", textDecoration: "none" }}>Entrar</Link></strong>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <h1 style={{ color: '#000', marginBottom: 0, textAlign: "center" }}>Simplifique sua Administração <br /> com Nossa Plataforma</h1>
        <p style={{ color: '#000', marginBottom: 0, fontSize: 20, textAlign: "center" }}>Com a nossa plataforma de e-commerce, <br />
          oferecemos-lhe a oportunidade de criar e gerenciar a <br />
          sua loja online.</p>

      <div style={{width:"30%" }}>
        <Button><Link to={`/cadastro`} style={{ color: "#fff", textDecoration: "none" }}>Cadastrar-se</Link></Button>
      </div>
      
        <img src={prototipo} alt="prototipo" />
      </Box>

    </>
  );
};
export default Landpage;

