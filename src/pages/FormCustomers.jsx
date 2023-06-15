import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Header from '../components/Header'
import Content from '../components/Content';
import Button from "../components/Button"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import MiniDrawer from '../components/MiniDrawer'

const FormCustomers = () => {
    const [clients, setClients] = useState(false);
    const navigate = useNavigate()

    const loadClients = async () => {
        try {
            const response = await fetch('http://localhost:3100/client')
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

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Minha funcao de submit')
        console.log(event.target)
        const fname = event.target.fname.value
        const lname = event.target.lname.value
        const cpf = event.target.cpf.value
        const dateOfBirth = event.target.dateOfBirth.value
        const phone = event.target.phone.value
        const email = event.target.email.value
        const address = event.target.address.value
        const street = event.target.street.value
        const cep = event.target.cep.value
        const houseNumber = event.target.houseNumber.value
        const referencePoint = event.target.referencePoint.value
        const client = { fname, lname, cpf, dateOfBirth, phone, email, address, street, cep, houseNumber, referencePoint }
        console.log(client)
        try {
            const response = await fetch('http://localhost:3100/client',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(client),
                })
            const data = await response.json()
            console.log(data)
            loadClients()
            navigate("/vendas")
            toast.success('Cliente criado com sucesso!')
        } catch (error) {
            console.log(error)
            toast.error('Aconteceu um imprevisto, tente novamente mais tarde.')
        }
    }

    return (
        <>
            <MiniDrawer>
                {/* <Header /> */}
                <Content>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
                        <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Grid container spacing={2} sx={{ height: "100%", width: "70%", }}>
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
                                        <TextField name='dateOfBirth' label="Data de Nascimento" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='phone' label="Telefone" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='email' label="E-mail" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='address' label="Endereço" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='street' label="Bairro" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='cep' label="CEP" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='houseNumber' label="Nº Casa" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='referencePoint' label="Complemento" variant="outlined" fullWidth />
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
                </Content>
            </MiniDrawer>
        </>
    )
}

export default FormCustomers