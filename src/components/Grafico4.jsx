import React from 'react';
import Box from '@mui/material/Box';
import { FaUserCircle as User, FaUserAlt as User2 } from 'react-icons/fa'

export function Chart4() {
  const data = [

  ];

  return (
    <div className="chartContainer" style={{display:'flex', justifyContent:'center'}}>
      <Box width={500} height={700} data={data} style={{
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
}} /><p>Nome</p><Box>informações</Box>
        </Box>

    </div>
  )
}

export default Chart4;