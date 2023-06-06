import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../images/Dynamics.png'
import prototipo from '../images/prototipo avançado pag de produtos 7.png'
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import Content from '../components/Content';
import './Landpage.css';

const Landpage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando um atraso de carregamento
    setTimeout(() => {
      // Após o atraso, define o estado "loading" como false para mostrar o conteúdo
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Content>
        <Box sx={{ flexGrow: 1, padding: "25px 0 0 20px" }}>
          <AppBar position="static" sx={{ boxShadow: 'none', }}>
            <Toolbar sx={{ backgroundColor: '#f1f1f1', }}>
              <Typography sx={{ flexGrow: 0.9 }}>
                <img src={Logo} alt="" />
              </Typography>
              <strong><h2><Link to={`/login`}>Entrar</Link></h2></strong>
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: "20px"
        }}>
          {loading ? ( // Verifica se o conteúdo está carregando
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {/* Se estiver carregando, exibe os componentes Skeleton */}
              <Skeleton variant="text" width={300} height={100} animation="wave" />
              <Skeleton variant="text" width={300} height={40} animation="wave" />
              <Skeleton variant="text" width={200} height={40} animation="wave" />
              <Skeleton variant="text" width={200} height={40} animation="wave" />
              <Skeleton variant="retangle" width={600} height={80} animation="wave" />
            </Box>
          ) : (
            <>
              <h1 style={{ color: '#252525', marginBottom: 0, textAlign: "center" }}>Simplifique sua Administração <br /> com Nossa Plataforma</h1>
              <p style={{ color: '#252525', marginBottom: 0, fontSize: 20, textAlign: "center" }}>
                Com a nossa plataforma de e-commerce, <br />
                oferecemos-lhe a oportunidade de criar e gerenciar a <br />
                sua loja online.
              </p>
              <div style={{ width: "30%" }}>
                <Button className="button"><Link to={`/cadastro`} style={{ color: "#fff", textDecoration: "none" }}>Cadastrar-se</Link></Button>
              </div>
              <img src={prototipo} alt="prototipo" />
            </>
          )}
        </Box>
      </Content>
    </>
  );
};

const styles = {
  hover: {
    hover: 'red'
  }
}

export default Landpage;

