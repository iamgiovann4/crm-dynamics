import React from 'react';
import Box from '@mui/material/Box';
import { FaUserCircle as User, FaUserAlt as User2 } from 'react-icons/fa'
import useAuthStore from '../store/authStore';
import { NavLink } from 'react-router-dom';

export function Chart4() {
  const nameUserLogged = useAuthStore((state) => state.fname)
  const cpfUserLogged = useAuthStore((state) => state.cpf)
  const email = useAuthStore((state) => state.email)

  return (
    <div className="chartContainer" style={{display:'flex', justifyContent:'center'}}>
            <Box width={1000} height={350} style={{
        borderRadius: '10px',
        boxSizing: 'initial'
      }}>
      <Box width={1000} height={350} style={{
                borderRadius: '10px',
                background: '#FFF',
                boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.05)',
                padding: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
      }}>
        <User size={80} style={{ color: "black", float: 'left'
}} /><p>{nameUserLogged}</p>
<Box>
  <p style={{float: 'left', margin: '5px', color: '#252525'}}>cpf: </p><p style={{float: 'left', margin: '5px', color: '#0000007D'}}>{cpfUserLogged}</p>
</Box>
<Box>
  <p style={{float: 'left', margin: '5px', color: '#252525'}}>email: </p><p style={{float: 'left', margin: '5px', color: '#0000007D'}}>vitormariotto@gmail.com</p>
</Box>
<Box>
  <p style={{float: 'left', margin: '5px', color: '#252525'}}>telefone: </p><p style={{float: 'left', margin: '5px', color: '#0000007D'}}>12 99667 1503</p>
</Box>
        </Box>
        </Box>
        
    </div>
    
  )
}

export default Chart4;