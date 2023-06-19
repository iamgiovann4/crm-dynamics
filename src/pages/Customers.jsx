import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Content from '../components/Content'
import TableCustomers from '../components/TableCustomers'
import './customers.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import MiniDrawer from '../components/MiniDrawer'

function Customers() {
    const [clients, setClients] = useState(false); {/* Atualiza os dados do Banco */ }
    const navigate = useNavigate()

    // console.log(products)
    // const OpenModal = () => {
    //     setOpenModal(true)
    // }
    // const CloseModal = () => {
    //     setOpenModal(false)
    // }

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
            toast.success('Cliente cadastrado com sucesso!')
        } catch (error) {
            console.log(error)
            toast.error('Aconteceu um imprevisto, tente novamente mais tarde.')
        }
    }

    return (
        <>
            <MiniDrawer>
                <Content title='Clientes'>
                    {/* <Header /> */}
                    <Box sx={{ display: 'flex' }}>
                        <table className='tabela2'>
                            <thead>
                                <tr>
                                    <th colSpan={12}>
                                        <Box direction="row" className='stack2'>
                                            <h1 className='tituloTabela2'>Seus Clientes</h1>
                                            <button disabled={false} variant="filled" className='botao2' onClick={() => navigate('/cadastroC')}>Adicionar</button>
                                        </Box>
                                    </th>
                                </tr>

                                <tr>
                                    <th className='coluna2'>Nome</th>
                                    <th className='coluna2'>Sobrenome</th>
                                    <th className='coluna2'>CPF</th>
                                    <th className='coluna2'>Nascimento</th>
                                    <th className='coluna2'>Telefone</th>
                                    <th className='coluna2'>E-mail</th>
                                    <th className='coluna2'>Endereço</th>
                                    <th className='coluna2'>Bairro</th>
                                    <th className='coluna2'>CEP</th>
                                    <th className='coluna2'>N°</th>
                                    <th className='coluna2'>Complemento</th>
                                    <th className='coluna2'></th>
                                    <th className='coluna2'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.length > 0 ?
                                    clients.map(client => (
                                        <TableCustomers key={client.id} client={client} setClients={setClients} clients={clients} />
                                    )) : (
                                        <tr>
                                            <td colSpan={10}>Nenhum cliente cadastrado!</td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </Box>
                </Content>
            </MiniDrawer>
        </>
    )
}

export default Customers