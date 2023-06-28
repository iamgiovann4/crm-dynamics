import React from 'react';
import Box from '@mui/material/Box';
import { FaUserCircle as User, FaUserAlt as User2 } from 'react-icons/fa'
import useAuthStore from '../store/authStore';

export function Chart4() {
  const nameUserLogged = useAuthStore((state) => state.fname)
  const cpfUserLogged = useAuthStore((state) => state.cpf)
  const email = useAuthStore((state) => state.email)

  return (
    <div className="chartContainer" style={{display:'flex', justifyContent:'center'}}>
      <Box width={500} height={700} style={{
                borderRadius: '10px',
                background: '#FFF',
                boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.05)',
                padding: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
      }}>
        <User size={80} style={{ color: "black",
}} /><p>{nameUserLogged}</p>
<Box>
  <p>cpf: {cpfUserLogged}</p>
  <p>cpf: {email}</p>
</Box>
        </Box>

    </div>
  )
}

export default Chart4;