import { useState } from 'react';
import { useNavigate } from 'react-router';
import useAuthStore from '../store/authStore'
import { toast } from 'react-toastify';
import { ImExit as Sair } from 'react-icons/im'
import '../components/perfil.css'
import {FaUserCircle as User} from  'react-icons/fa'
import { Box } from '@mui/system';

const Perfil = () => {
    const isLogged = useAuthStore((state) => state.isLogged)
    const nameUserLogged = useAuthStore((state) => state.fname)
    const cpfUserLogged = useAuthStore((state) => state.cpf)
    const tokenUserLogged = useAuthStore((state) => state.token)
    const logout = useAuthStore((state) => state.logout)
    const navigate = useNavigate()

    const [open, setOpen] = useState(false)

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
            <div className='dropdown'>
                {isLogged ? (
                    <>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <User size={30} style={{color: "#292727"}} />
                        <p className='paragrafoP' onClick={() => setOpen(!open)}><span className='usuario'><a>{nameUserLogged}</a></span></p>
                    </div>
                        
                    </>
                ) : null}
                {open &&
                    <ul className="dropdownMenu">
                        <li className='dropdownMenuItem' onClick={() => handleLogout()}>Sair</li>
                        <li className='dropdownMenuItem'>Perfil</li>
                        <li className='dropdownMenuItem'>mais...</li>
                    </ul>
                }
            </div>
        </>
    )
}

export default Perfil