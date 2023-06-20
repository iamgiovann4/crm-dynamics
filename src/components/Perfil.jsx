import * as React from 'react';
import { useNavigate } from 'react-router';
import useAuthStore from '../store/authStore'
import { toast } from 'react-toastify';
import '../components/perfil.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaUserCircle as User, FaUserAlt as User2 } from 'react-icons/fa'
import { ImExit as Sair } from 'react-icons/im'
import { RiContactsFill as Contact } from 'react-icons/ri'

const Perfil = () => {
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
                                <p className='paragrafoP'><span className='usuario'><a>{nameUserLogged}</a></span></p>
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
                    <MenuItem sx={{width: '110px', gap: '5px'}} onClick={handleClose}><User2/> Perfil</MenuItem>
                    <MenuItem sx={{width: '110px', gap: '5px'}} onClick={handleClose}><Contact/> Contato</MenuItem> 
                    <MenuItem sx={{width: '110px', gap: '5px'}} onClick={handleLogout}><Sair/> Sair</MenuItem>
                </Menu>
            </div>







            {/* <div className='dropdown'>
                {isLogged ? (
                    <>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <User size={30} style={{ color: "#292727" }} />
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
            </div> */}
        </>
    )
}

export default Perfil