import * as React from 'react';
import useAuthStore from '../store/authStore'
import { toast } from 'react-toastify';
import '../components/Perfil.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaUserCircle as User, FaUserAlt as User2 } from 'react-icons/fa'
import { ImExit as Sair } from 'react-icons/im'
import { RiContactsFill as Contact } from 'react-icons/ri'
import { API_SERVER } from '../config'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Perfil = () => {

    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const isLogged = useAuthStore((state) => state.isLogged)
    const nameUserLogged = useAuthStore((state) => state.fname)
    const cpfUserLogged = useAuthStore((state) => state.cpf)
    const tokenUserLogged = useAuthStore((state) => state.token)
    const logout = useAuthStore((state) => state.logout)

    const handleLogout = async () => {
        try {
            const response = await fetch(`${API_SERVER}/auth/logout`,
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
            <div>
                <Button
                    id="basic-button"
                    aria-controls={openMenu ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleClick}
                >
                    {isLogged ? (
                        <>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <User size={30} style={{ color: "#292727" }} />
                                <p className='paragrafoP'><span className='usuario'>{nameUserLogged}</span></p>
                            </div>

                        </>
                    ) : null}
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <NavLink to="/conta"  style={{color: 'black', textDecoration: 'none'}}><MenuItem sx={{ width: '110px', gap: '5px' }} onClick={handleClose}><User2 style={{color: 'black'}}/>Perfil</MenuItem></NavLink>
                    <MenuItem sx={{ width: '110px', gap: '5px' }} onClick={() => navigate('/contato')}><Contact />Contato</MenuItem>
                    <MenuItem sx={{ width: '110px', gap: '5px' }} onClick={handleLogout}><Sair />Sair</MenuItem>
                </Menu>
            </div>
        </>
    )
}

export default Perfil