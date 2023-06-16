//Pág dos funcionarios da empresa que forem cadastrados no sign up, essa pág também terá uma tabela
import Content from "../components/Content"
import Header from "../components/Header"

import React, { useEffect, useState } from 'react'
import '../pages/products.css'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import TableEmployees from '../components/TableEmployees'
import { toast } from 'react-toastify'
import MiniDrawer from '../components/MiniDrawer'

const hostEmployee = process.env.REACT_APP_HOST_LINE_EMPLOYEES


const Employees = () => {
    const [employees, setEmployees] = useState(false); {/* Atualiza os dados do Banco */ }
    const [openModal, setOpenModal] = useState(false); {/* Abrir e fechar o modal */ }

    const loadEmployees = async () => {
        try {
            const response = await fetch('http://localhost:3100/employees')
            const data = await response.json()
            console.log(data)
            // aqui esta o erro
            setEmployees(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadEmployees()
    }, []) // [] = executa apenas uma vez quando o componente é montados

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Minha funcao de submit')
        console.log(event.target)
        const name = event.target.name.value
        const price = event.target.price.value
        const stock = event.target.stock.value
        const product = { name, price, stock }
        console.log(product)
        try {
            const response = await fetch('http://localhost:3100/product',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(product),
                })
            const data = await response.json()
            console.log(data)
            setOpenModal(false)
            loadEmployees()
            toast.success('Produto criado com sucesso')
        } catch (error) {
            toast.error('Aconteceu um imprevisto, tente novamente mais tarde')
        }
    }

    return (
        <>
            <MiniDrawer>
                <Content title='Funcionarios'>
                    {/* <Header /> */}
                    <Box sx={{ display: 'flex' }}>
                        <table className='tabela'>
                            <thead>
                                <tr>
                                    <th colSpan={5}>
                                        <Stack className='stack' container direction="row">
                                            <h1 className='tituloTabela'>Seus Funciobnario</h1>
                                            <button className='botao' disabled={false} variant="filled" onClick={() => setOpenModal(true)}>Adicionar</button>
                                        </Stack>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th className='coluna' align="left">Nome</th>
                                    <th className='coluna' align="left">Sobrenome</th>
                                    <th className='coluna' align="left">CPF</th>
                                    <th className='coluna' align="left">E-mail</th>
                                    <th className='coluna' align="left">Cargo</th>
                                    <th className='coluna' align="left">Salario</th>
                                    <th className='coluna' align="left">Nascimento</th>
                                    <th className='coluna' align="left">Rua</th>
                                    <th className='coluna' align="left">Numero</th>
                                    <th className='coluna' align="left">Bairro</th>
                                    <th className='coluna' align="left"></th>
                                    <th className='coluna' align="left"></th>
                                </tr>
                                {employees &&
                                    employees.map(employee => (
                                        <TableEmployees key={employee.id} employee={employee} setEmployees={setEmployees} employees={employees} />
                                    ))}
                            </tbody>
                        </table>
                    </Box>
                    {openModal &&
                        <Box className='modal' onClick={(event) => {
                            if (event.target.className.includes('modal')) {
                                setOpenModal(false)
                            }
                        }}>
                            <Box className='container'>
                                <div className='xizinho'><p onClick={() => setOpenModal(false)}>X</p></div>
                                <h2>Cadastrar produtos</h2>
                                <form onSubmit={handleSubmit} className='formModal'>
                                    <input type="text" name="name" placeholder="Nome" /><br />
                                    <input type="text" name="price" placeholder="Preço" /><br />
                                    <input type="int" name="stock" placeholder="Quantidade" /><br /><br />
                                    <button className='enviar' type='submit'>Enviar</button><br />
                                    <button className='fechar' onClick={() => setOpenModal(false)}>Fechar</button>
                                </form>
                            </Box>
                        </Box>
                    }
                </Content>
            </MiniDrawer>
        </>
    )
}

export default Employees