import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Content from '../components/Content';
import Button from "../components/Button"
import { toast } from 'react-toastify'
import { useNavigate, useLocation } from 'react-router-dom'
import MiniDrawer from '../components/MiniDrawer'
import { API_SERVER } from '../config';

const CustomersEdit = () => {
    const navigate = useNavigate()

    const { state: row } = useLocation()
    console.log(row)

    const [fname, setFname] = useState(row.fname)
    const [lname, setLname] = useState(row.lname)
    const [cpf, setCpf] = useState(row.cpf)
    const [dateOfBirth, setDateOfBirth] = useState(row.dateOfBirth)
    const [phone, setPhone] = useState(row.phone)
    const [email, setEmail] = useState(row.email)
    const [address, setAddress] = useState(row.address)
    const [street, setStreet] = useState(row.street)
    const [cep, setCep] = useState(row.cep)
    const [houseNumber, setHouseNumber] = useState(row.houseNumber)
    const [referencePoint, setReferencePoint] = useState(row.referencePoint)

    const handleEdit = async (event) => {
        event.preventDefault()
        const id = parseInt(event.target.id.value)
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
        const clientEdited = { id, fname, lname, cpf, dateOfBirth, phone, email, address, street, cep, houseNumber, referencePoint }
        try {
            const response = await fetch(`${API_SERVER}/client`,
                {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(clientEdited),
                })
            const data = await response.json()
            if (response.status === 200) {
                toast.success('Cliente editado com sucesso!')
                navigate('/clientes')
                // setOpenModal(false)
            } else {
                alert(data.message)
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <MiniDrawer>
                <Content>
                    <Box m={0} p={0} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', height: '850px' }}>
                        <h1 style={{ color: '#252525', marginBottom: '50px' }}>Editar Cliente</h1>
                        <form onSubmit={handleEdit} style={{ display: "flex", justifyContent: "center", height: '70%' }}>
                            <Grid container spacing={2} sx={{ width: '70%' }}>
                                <input type="hidden" name="id" value={row.id} />
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='fname' label="Nome" value={fname} variant="outlined" fullWidth onChange={e => setFname(e.target.value)} />
                                    </FormControl>
                                </Grid><br />
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='lname' label="Sobrenome" value={lname} variant="outlined" fullWidth onChange={e => setLname(e.target.value)} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='cpf' label="CPF" value={cpf} variant="outlined" fullWidth onChange={e => setCpf(e.target.value)} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='dateOfBirth' label="Data de Nascimento" value={dateOfBirth} variant="outlined" fullWidth onChange={e => setDateOfBirth(e.target.value)} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='phone' label="Telefone" value={phone} variant="outlined" fullWidth onChange={e => setPhone(e.target.value)} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='email' label="E-mail" value={email} variant="outlined" fullWidth onChange={e => setEmail(e.target.value)} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='address' label="Endereço" value={address} variant="outlined" fullWidth onChange={e => setAddress(e.target.value)} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='street' label="Bairro" value={street} variant="outlined" fullWidth onChange={e => setStreet(e.target.value)} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='cep' label="CEP" value={cep} variant="outlined" fullWidth onChange={e => setCep(e.target.value)} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='houseNumber' label="Nº Casa" value={houseNumber} variant="outlined" fullWidth onChange={e => setHouseNumber(e.target.value)} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: '100%' }} variant='outlined'>
                                        <TextField name='referencePoint' label="Complemento" value={referencePoint} variant="outlined" fullWidth onChange={e => setReferencePoint(e.target.value)} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{ width: "30%", margin: 'auto' }}>
                                        <Button>Editar</Button>
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

export default CustomersEdit