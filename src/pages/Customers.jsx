import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Content from '../components/Content'
import Header from '../components/Header'
import TableClient from '../components/TableClient'
import './customers.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Customers() {
    const [clients, setClients] = useState(false); {/* Atualiza os dados do Banco */ }
    const [openModal, setOpenModal] = useState(false); {/* Abrir e fechar o modal */ }
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
            setOpenModal(false)
            loadClients()
            toast.success('Cliente criado com sucesso!')
        } catch (error) {
            console.log(error)
            toast.error('Aconteceu um imprevisto, tente novamente mais tarde.')
        }
    }

    return (
        <>
            <Content>
               <Header /> 
                <Box sx={{ display: 'flex' }}>
                    <table className='tabela2'>
                        <tr>
                            <th colSpan={12}>
                                <Stack container direction="row" className='stack2'>
                                    <h1 className='tituloTabela2'>Seus Clientes</h1>
                                    <button disabled={false} variant="filled" className='botao2' onClick={() => navigate('/Home')}>Adicionar</button>
                                </Stack>
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
                            <th className='coluna2'>N° casa</th>
                            <th className='coluna2'>Complemento</th>
                            <th className='coluna2'></th>
                            <th className='coluna2'></th>
                        </tr>
                        {clients.length > 0  ?
                            clients.map(client => (
                                <TableClient key={client.id} client={client} setClients={setClients} clients={clients} />
                            )): (
                            <tr>
                                <td colSpan={10}>Nenhum cliente cadastrado</td>
                            </tr>
                            )}
                    </table>
                </Box>

                {/* {openModal &&
                    <Box className='modal' onClick={(event) => {
                        if (event.target.className.includes('modal')) {
                            setOpenModal(false)
                        }
                    }}>
                        <Box className='container'>
                            <div className='xizinho'><p onClick={() => setOpenModal(false)}>X</p></div>
                            <h2>Cadastrar produtos</h2>
                            <form onSubmit={handleSubmit}className='formModal'>
                                <input type="text" name="fname" placeholder="Nome" /><br />
                                <input type="text" name="lname" placeholder="Sobrenome" /><br />
                                <input type="int" name="cpf" placeholder="CPF" /><br /><br />
                                <input type="int" name="dateOfBirth" placeholder="Nascimento" /><br /><br />
                                <input type="int" name="phone" placeholder="Telefone" /><br /><br />
                                <input type="int" name="email" placeholder="E-mail" /><br /><br />
                                <input type="int" name="address" placeholder="Endereço" /><br /><br />
                                <input type="int" name="street" placeholder="Bairro" /><br /><br />
                                <input type="int" name="cep" placeholder="CEP" /><br /><br />
                                <input type="int" name="houseNumber" placeholder="Nº casa" /><br /><br />
                                <input type="int" name="referencePoint" placeholder="Complemento" /><br /><br />
                                <button className='enviar' type='submit'>Enviar</button><br />
                                <button className='fechar' onClick={() => setOpenModal(false)}>Fechar</button>
                            </form>
                        </Box>
                    </Box>
                } */}
            </Content>
        </>
    )
}

export default Customers