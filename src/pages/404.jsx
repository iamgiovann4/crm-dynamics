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
    <>
      <Box width={1000} height={50} style={{
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
        <div className="chartContainer" style={{display:'flex', justifyContent:'center'}}>


    </div>
      <div style={{ ...clockStyle}}>
        <h2>Hora</h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{hours}:{minutes}:{seconds}</p>
      </div>

      <div style={{ ...clockStyle}}>
        <h2>Dia da semna</h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{dayOfWeek}</p>
      </div>

      <div style={{ ...clockStyle}}>
        <h2>Dia do Mês</h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{dayOfMonth}</p>
      </div>

      <div style={{ ...clockStyle}}>
        <h2>Mês</h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{month}</p>
      </div>

      <div style={{ ...clockStyle}}>
        <h2>Ano</h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{year}</p>
      </div>
      </Box>

    </>
  );
};

export default Clock;
