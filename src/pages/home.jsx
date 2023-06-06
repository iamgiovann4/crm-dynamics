import React from 'react';
import './Home.css';
import Content from '../components/Content';
import SideBar from '../components/SideBar';
import Chart from '../components/grafico1';
import Chart2 from '../components/grafico2';
import Chart3 from '../components/grafico3';
import Chart4 from '../components/grafico4';
import useAuthStore from '../store/authStore'
import { ImExit as Sair } from 'react-icons/im'
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router';
import Header from '../components/Header';

const Home = () => {    
    const isLogged = useAuthStore((state) => state.isLogged)
    const nameUserLogged = useAuthStore((state) => state.fname)
    const cpfUserLogged = useAuthStore((state) => state.cpf)
    const tokenUserLogged = useAuthStore((state) => state.token)
    const logout = useAuthStore((state) => state.logout)
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
          const response = await fetch('http://localhost:3100/auth/logout',
          {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({cpf: cpfUserLogged, token: tokenUserLogged}),
          })
          const data = await response.json()
          console.log(data)
          if(response.status === 200) {
            logout()
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            navigate('/login')
            toast.success('Deslogado!')
          } else{
            alert(data.message)
          }
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <>
            <Content title="Dashboard"> <Header  />
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <div style={{ width: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '10px', marginRight: '30px'}}>
                        {isLogged ? (
                            <>
                                <p style={styles.nome}>Olá, <span style={{fontWeight: 'bolder', fontSize: '25px'}}>{nameUserLogged}</span></p>
                                <button onClick={() => handleLogout()} style={{marginTop: '-10px', border: 'none', padding: '5px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center'}}><Sair size={25}/><p style={{margin: 0, fontSize: '18px'}}>Sair</p></button>
                                {/* <img onClick={() => handleLogout()} style={styles.avatar} src={avatarUserLogged} alt={nomeUserLogged} /> */}
                            </>
                        ) : null }
                    </div>
                </div>   
                <div >
                    <div style={{ display: 'flex', height: '50%' }}>
                        <div style={{ width: "50%", borderBottom: " 2px solid #000", borderRight: " 2px solid #000", padding: '20px 0' }}>
                            <Chart />
                        </div>
                        <div style={{ width: "50%", borderBottom: " 2px solid #000", padding: '20px 0' }}>
                            <Chart2 />
                        </div>
                    </div>
                    <div style={{ display: 'flex', height: '50%' }}>
                        <div style={{ width: "50%", borderBottom: " 2px solid #000", borderRight: " 2px solid #000", padding: '20px 0' }}>
                            <Chart3 />
                        </div>
                        <div style={{ width: "50%", borderBottom: " 2px solid #000", padding: '20px 0' }}>
                            <Chart4 />
                        </div>
                    </div>
                </div>
            </Content>
        </>
    );
};

const styles = {
    nome: {
        color: '#252525',
        fontSize: '22px',
    }
}

export default Home;
