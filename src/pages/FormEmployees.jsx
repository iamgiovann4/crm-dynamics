import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Button from "../components/Button"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import MiniDrawer from '../components/MiniDrawer'
import { API_SERVER } from '../config';

const FormEmployees = () => {
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Minha funcao de submit')
        console.log(event.target)
        const fname = event.target.fname.value
        const lname = event.target.lname.value
        const cpf = event.target.cpf.value
        const email = event.target.email.value
        const office = event.target.office.value
        const wage = event.target.wage.value
        const birth = event.target.birth.value
        const street = event.target.street.value
        const number = event.target.number.value
        const address = event.target.address.value
        const Employees = { fname, lname, cpf, email, office, wage, birth , street, number, address }
        console.log(Employees)
        try {
            const response = await fetch(`${API_SERVER}/employees`,
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(Employees),
                })
            const data = await response.json()
            console.log(data)
            navigate("/funcionarios")
            toast.success('Produto criado com sucesso')
        } catch (error) {
            toast.error('Aconteceu um imprevisto, tente novamente mais tarde')
        }
    }

    return (
        <>
            <MiniDrawer>
                    <Box m={0} p={0} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', height: '850px'}}>
                    <h1 style={{color: '#252525', marginBottom: '50px'}}>Cadastro de Funcionarios</h1>
                        <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", height: '70%' }}>
                            <Grid container spacing={2} sx={{ width: '70%' }}>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='fname' label="Nome" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid><br />
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='lname' label="Sobrenome" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='cpf' label="CPF" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='email' label="E-mail" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='office' label="Cargo" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='wage' label="Salário" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='birth' label="Nascimento" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='street' label="Rua" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='number' label="Numero" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='address' label="Bairro" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{ width: "30%", margin: 'auto' }}>
                                        <Button>Cadastrar</Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
            </MiniDrawer>
        </>
    )
}

export default FormEmployees