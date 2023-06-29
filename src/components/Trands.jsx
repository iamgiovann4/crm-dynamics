import React from 'react';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { FaUserCircle as User, FaUserAlt as User2 } from 'react-icons/fa'
import { useState } from 'react';
import { useEffect } from 'react';
import { API_SERVER } from '../config'
import useAuthStore from '../store/authStore';
import InventoryIcon from '@mui/icons-material/Inventory';
import ContactsIcon from '@mui/icons-material/Contacts';

export function Chart2() {

  const nameUserLogged = useAuthStore((state) => state.fname)
  const [clients, setClients] = useState(false);

  const loadClients = async () => {
    try {
      const response = await fetch(`${API_SERVER}/client`)
      const data = await response.json()
      setClients(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadClients()
  }, []) // [] = executa apenas uma vez quando o componente é montados

  const [employees, setEmployees] = useState(false);

  const loadEmployees = async () => {
    try {
      const response = await fetch(`${API_SERVER}/employees`)
      const data = await response.json()
      setEmployees(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadEmployees()
  }, []) // [] = executa apenas uma vez quando o componente é montados

  return (
    <div className="chartContainer" style={{ display: 'flex', justifyContent: 'center' }}>
      <Box width={1000} height={440} style={{
        borderRadius: '10px',
        boxSizing: 'initial'
      }}>
        <NavLink to="/conta"><Box width={980} height={200} style={{
          borderRadius: '10px',
          backgroundColor: 'white',
          boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.05)',
          float: 'left',
          margin: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
          flexDirection: 'column',
        }}>
          <User size={80} style={{
            color: "#4d4c4c",
          }} /><p>{nameUserLogged}</p><Box sx={{fontWeight: '500'}}>Veja Mais detalhes sobre sua conta</Box>
        </Box>
        </NavLink>

        <NavLink to="/funcionarios">
          <Box width={480} height={200} style={{
            borderRadius: '10px',
            background: '#FFF',
            boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.05)',
            float: 'left',
            margin: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: '#1373e0',
            fontSize: '20px',
            fontWeight: '500'
          }}>
            <InventoryIcon></InventoryIcon>Funcionários<Box sx={{color: 'black', fontWeight: 'bold'}}>{employees.length}</Box>
          </Box>
        </NavLink>

        <NavLink to="/clientes">
          <Box width={480} height={200} style={{
            borderRadius: '10px',
            background: '#FFF',
            boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.05)',
            float: 'left',
            margin: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: '#258f0b',
            fontSize: '20px',
            fontWeight: '500'
          }}>
            <ContactsIcon></ContactsIcon>Clientes<Box sx={{color: 'black', fontWeight: 'bold'}}>{clients.length}</Box>
          </Box>
        </NavLink>



      </Box>
    </div>
  )
}

export default Chart2;