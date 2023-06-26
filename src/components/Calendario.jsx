import React from 'react';
import Box from '@mui/material/Box';

export function Chart2() {
  const data = [

  ];

  return (
    <div className="chartContainer" style={{display:'flex', justifyContent:'center'}}>
      <Box width={1000} height={100} data={data} style={{
        borderRadius: '10px',
        background: '#FFF',
        boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.05)',
        padding: '50px'
      }}>
        Calendario
        </Box>
    </div>
  )
}

export default Chart2;