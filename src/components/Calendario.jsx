import React from 'react';
import Box from '@mui/material/Box';
import { FaUserCircle as User, FaUserAlt as User2 } from 'react-icons/fa'
import {
  LineChart,
} from 'recharts';

export function Chart() {
  const data = [

  ];

  return (
    <div className="chartContainer" style={{display:'flex', justifyContent:'center'}}>
      <Box width={980} height={50} data={data} style={{
        borderRadius: '10px',
        background: '#FFF',
        boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.05)',
        padding: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    
        '&:hover':{
          transform: 'scale(1.5)',
      }
      }}>


      </Box>
    </div>
  )
}

export default Chart;