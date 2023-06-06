import SideBar from './SideBar'
import useAuthStore from '../store/authStore'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { ImExit as Sair } from 'react-icons/im'

const Header = () => {
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
                    body: JSON.stringify({ cpf: cpfUserLogged, token: tokenUserLogged }),
                })
            const data = await response.json()
            console.log(data)
            if (response.status === 200) {
                logout()
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                navigate('/login')
                toast.success('Deslogado!')
            } else {
                alert(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div style={styles.wrapper}>
                <SideBar />
                <div>
                    <div style={styles.centralizacao}>
                        {isLogged ? (
                            <>
                                <p style={styles.paragrafo}>Olá, <span style={styles.usuario}>{nameUserLogged}</span></p>
                                <button onClick={() => handleLogout()} style={styles.botao}><Sair size={23} /><p style={styles.sair}>Sair</p></button>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    centralizacao: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: '30px'
    },
    paragrafo: {
        color: '#252525',
        fontSize: '22px',
    },
    usuario: {
        fontWeight: 'bolder',
        fontSize: '25px'
    },
    botao: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '-10px',
        border: 'none',
        padding: '5px 20px',
        cursor: 'pointer'
    },
    sair: {
        margin: 0, 
        fontSize: '18px'
    }
}

export default Header