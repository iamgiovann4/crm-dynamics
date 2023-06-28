import React, { useState, useEffect } from 'react';

const clockStyle = {
  display: 'inline-block',
  margin: '10px',
  padding: '20px',
  backgroundColor: '#F2F2F2',
  borderRadius: '10px',
  color: '#333',
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

  const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'];
  const dayOfWeek = daysOfWeek[time.getDay()];

  const dayOfMonth = time.getDate();
  const month = time.toLocaleString('default', { month: 'long' });
  const year = time.getFullYear();

  return (
    <>
      <div style={{ ...clockStyle, backgroundColor: '#FCE38A' }}>
        <h2>Hora</h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{hours}:{minutes}:{seconds}</p>
      </div>

      <div style={{ ...clockStyle, backgroundColor: '#95E1D3' }}>
        <h2>Dia da semna</h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{dayOfWeek}</p>
      </div>

      <div style={{ ...clockStyle, backgroundColor: '#EAFFD0' }}>
        <h2>Dia do Mês</h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{dayOfMonth}</p>
      </div>

      <div style={{ ...clockStyle, backgroundColor: '#FFCAD4' }}>
        <h2>Mês</h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{month}</p>
      </div>

      <div style={{ ...clockStyle, backgroundColor: '#B5EAD7' }}>
        <h2>Ano</h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{year}</p>
      </div>
    </>
  );
};

export default Clock;
