import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';


const clockStyle = {
  display: 'inline-block',
  margin: '10px',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  fontFamily: 'Arial',
};
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
  const dayOfWeek = daysOfWeek[time.getDay()];

  const dayOfMonth = time.getDate();
  const month = time.toLocaleString('default', { month: 'long' });
  const year = time.getFullYear();

  return (
    <div className="chartContainer" style={{display:'flex', justifyContent:'center'}}>
      <Box width={980} height={50} style={{
        borderRadius: '10px',
        background: '#FFF',
        boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.05)',
        padding: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    
        '&:hover':{
          transform: 'scale(1.5)',
      }
      }}>
        <div className="chartContainer" style={{display:'flex', justifyContent:'center'}}>


    </div>
      <div style={{ ...clockStyle}}>
        <h3 style={{color: '#4d4c4cb2'}}>Hora</h3>
        <p style={{ fontSize: '22px', fontWeight: 'bold' }}>{hours}:{minutes}:{seconds}</p>
      </div>

      <div style={{ ...clockStyle}}>
        <h3 style={{color: '#4d4c4cb2'}}>Dia da semna</h3>
        <p style={{ fontSize: '22px', fontWeight: 'bold' }}>{dayOfWeek}</p>
      </div>

      <div style={{ ...clockStyle}}>
        <h3 style={{color: '#4d4c4cb2'}}>Dia do Mês</h3>
        <p style={{ fontSize: '22px', fontWeight: 'bold' }}>{dayOfMonth}</p>
      </div>

      <div style={{ ...clockStyle}}>
        <h3 style={{color: '#4d4c4cb2'}}>Mês</h3>
        <p style={{ fontSize: '22px', fontWeight: 'bold' }}>{month}</p>
      </div>

      <div style={{ ...clockStyle}}>
        <h3 style={{color: '#4d4c4cb2'}}>Ano</h3>
        <p style={{ fontSize: '22px', fontWeight: 'bold' }}>{year}</p>
      </div>
      </Box>
    </div>
  );
};

export default Clock;
