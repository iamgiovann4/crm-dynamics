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

    const [openModalEdit, setOpenModalEdit] = useState(false); {/* Abrir e fechar o modal */ }
    const [employeesToEdit, setEmployeesToEdit] = useState({})


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
        const userEdited = { fname, lname, cpf, email, email, office, wage, birth , street, number, address }
        console.log(userEdited)
        try {
            const response = await fetch('http://localhost:3100/employees',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userEdited),
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

    const handleEdit = async (event) => {
        event.preventDefault()
        const id = parseInt(event.target.id.value)
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
        const userEdited = { id, fname, lname, cpf, email, email, office, wage, birth , street, number, address }
        try {
            const response = await fetch('http://localhost:3100/product',
                {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userEdited),
                })
            const data = await response.json()
            if (response.status === 200) {
                toast.success('Produto editado com sucesso')
                const newProducts = employees.map((employee) => {
                    if (employee.id === id) {
                        return userEdited
                    }
                    return employee
                })
                setEmployees(newProducts)
                setOpenModal(false)
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
                <Content title='Funcionarios'>
                    {/* <Header /> */}
                    <Box sx={{ display: 'flex' }}>
                        <table className='tabela'>
                            <thead>
                                <tr>
                                    <th className='stack'>
                                        <h1 className='tituloTabela'>Seus Produtos</h1>
                                    </th>
                                    <th colSpan={4} className='stack'>
                                        <button className='botao' disabled={false} variant="filled" onClick={() => setOpenModal(true)}>Adicionar</button>
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
                                        <TableEmployees key={employee.id} employee={employee} setEmployees={setEmployees} employees={employees} setOpenModalEdit={setOpenModalEdit} />
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
                                    <input type="text" name="fname" placeholder="Nome" /><br />
                                    <input type="text" name="lname" placeholder="Sobrenome" /><br />
                                    <input type="int" name="cpf" placeholder="CPF" /><br /><br />
                                    <input type="int" name="email" placeholder="E-mail" /><br /><br />
                                    <input type="int" name="office" placeholder="Cargo" /><br /><br />
                                    <input type="int" name="wage" placeholder="Salario" /><br /><br />
                                    <input type="int" name="birth" placeholder="Nascimento" /><br /><br />
                                    <input type="int" name="street" placeholder="Rua" /><br /><br />
                                    <input type="int" name="number" placeholder="Numero" /><br /><br />
                                    <input type="int" name="address" placeholder="Bairro" /><br /><br />
                                    <button className='enviar' type='submit'>Enviar</button><br />
                                    <button className='fechar' onClick={() => setOpenModal(false)}>Fechar</button>
                                </form>
                            </Box>
                        </Box>
                    }

                    {openModalEdit &&
                        <Box className='modal' onClick={(event) => {
                            if (event.target.className.includes('modal')) {
                                setOpenModal(false)
                            }
                        }}>
                            <Box className='container'>
                                <div className='xizinho'><p onClick={() => setOpenModalEdit(false)}>X</p></div>
                                <h2>Editar Produto</h2>
                                <form onSubmit={handleEdit} className='formModal'>
                                    <input type="hidden" name="id" value={employeesToEdit.id} />
                                    <input type="text" name="name" placeholder="Nome" value={employeesToEdit.fname} onChange={e => setEmployeesToEdit({...employeesToEdit, fname: e.target.value})} /><br />
                                    <input type="text" name="price" placeholder="Preço" value={employeesToEdit.lname} onChange={e => setEmployeesToEdit({...employeesToEdit, lname: e.target.value})} /><br />
                                    <input type="int" name="stock" placeholder="Quantidade" value={employeesToEdit.office} onChange={e => setEmployeesToEdit({...employeesToEdit, office: e.target.value})} /><br /><br />
                                    <button className='enviar' type='submit'>Editar</button><br />
                                    <button className='fechar' onClick={() => setOpenModalEdit(false)}>Fechar</button>
                                </form>
                            </Box>
                        </Box>
                    }
                </Content>
            </MiniDrawer >
        </>
    )
}

export default Employees