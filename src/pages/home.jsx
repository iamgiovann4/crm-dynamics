import React from 'react';
import './Home.css';
import Content from '../components/Content';
import NavBar from '../components/NavBar';
import Chart from '../components/grafico1';
import Chart2 from '../components/grafico2';
import Chart3 from '../components/grafico3';
import Chart4 from '../components/grafico4';
import useAuthStore from '../store/authStore'

const Home = () => {    
    const isLogged = useAuthStore((state) => state.isLogged)
    const nameUserLogged = useAuthStore((state) => state.fname)
    const cpfUserLogged = useAuthStore((state) => state.cpf)
    const tokenUserLogged = useAuthStore((state) => state.token)
    const logout = useAuthStore((state) => state.logout)

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
            window.location.href = "./Login"
            localStorage.removeItem('token')
            localStorage.removeItem('user')
          } else{
            alert(data.message)
          }
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <>
            <Content title="Dashboard"> <NavBar />
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <div style={{ height: '100px', width: '300px', display: 'flex', justifyContent: 'flex-end', paddingRight: '30px'}}>
                        {isLogged ? (
                            <>
                                <p onClick={() => handleLogout()} style={styles.nome}>Olá, <span style={{fontWeight: 'bolder', fontSize: '25px'}}>{nameUserLogged}</span></p>
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
        cursor: 'pointer',
        color: '#252525',
        fontSize: '22px',
    }
}

export default Home;
