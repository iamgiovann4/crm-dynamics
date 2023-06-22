import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Content from '../components/Content'
import TableCustomers from '../components/TableCustomers'
import './tableAll.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import MiniDrawer from '../components/MiniDrawer'
import clientes from '../images/clientes.svg'
import { API_SERVER } from '../config'

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
            const response = await fetch(`${API_SERVER}/client`,
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
                    <Box className='caixaTabela'>
                        <table className='tabela'>
                            <thead>
                                <tr>
                                    <th colSpan={12}>
                                        <Box direction="row" className='stack'>
                                            <h1 className='tituloTabela'>Seus Clientes</h1>
                                            <button disabled={false} variant="filled" className='botao' onClick={() => navigate('/cadastroC')}>Adicionar</button>
                                        </Box>
                                    </th>
                                </tr>

                                <tr>
                                    <th className='coluna' align='left'>Nome</th>
                                    <th className='coluna' align='left'>Sobrenome</th>
                                    <th className='coluna' align='left'>CPF</th>
                                    <th className='coluna' align='left'>Nascimento</th>
                                    <th className='coluna' align='left'>Telefone</th>
                                    <th className='coluna' align='left'>E-mail</th>
                                    <th className='coluna' align='left'>Endereço</th>
                                    <th className='coluna' align='left'>Bairro</th>
                                    <th className='coluna' align='left'>CEP</th>
                                    <th className='coluna' align='left'>N°</th>
                                    <th className='coluna' align='left'>Complemento</th>
                                    <th className='coluna' align='left'></th>
                                    <th className='coluna' align='left'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.length > 0 ?
                                    clients.map((client, index) => (
                                        <TableCustomers index={index} key={client.id} client={client} setClients={setClients} clients={clients} />
                                    )) : (
                                        <img src={clientes} alt="clientes"/>
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