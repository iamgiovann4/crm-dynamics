import useAuthStore from '../store/authStore';
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { FaUserCircle as User, FaUserAlt as User2 } from 'react-icons/fa'

export function Chart4() {
  const nameUserLogged = useAuthStore((state) => state.fname)
  const cpfUserLogged = useAuthStore((state) => state.cpf)
  const email = useAuthStore((state) => state.email)

  return (
    <div className="chartContainer" style={{display:'flex', justifyContent:'center'}}>
           <Card
            sx={{
                width: 1000,
                maxWidth: '100%',
                boxShadow: 'lg',
                margin: "1rem"
            }}
        >
            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
            <User2 />

                <Typography fontSize="lg" fontWeight="lg" sx={{ mt: 1, mb: 0.5 }}>
                    {nameUserLogged}
                </Typography>
                <Typography level="body2" sx={{ maxWidth: '24ch', padding: '10px' }}>
                    cpf: {cpfUserLogged}
                </Typography>
                <Typography level="body2" sx={{ maxWidth: '24ch', padding: '10px' }}>
                    email: vitormariotto@gmail.com
                </Typography>
                <Typography level="body2" sx={{ maxWidth: '24ch', padding: '10px' }}>
                    telefone: 12 996671503
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        mt: 2,
                        '& > button': { borderRadius: '2rem' },
                    }}
                >
                  
                </Box>
            </CardContent>
        </Card>
        
    </div>
    
  )
}

export default Chart4;