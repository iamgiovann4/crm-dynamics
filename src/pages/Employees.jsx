//Pág dos funcionarios da empresa que forem cadastrados no sign up, essa pág também terá uma tabela
import Content from "../components/Content"

import React, { useEffect, useState } from 'react'
import '../pages/employees.css'
import Box from '@mui/material/Box'
import TableEmployees from '../components/TableEmployees'
import { toast } from 'react-toastify'
import MiniDrawer from '../components/MiniDrawer'
import { useNavigate } from "react-router"

const hostEmployee = process.env.REACT_APP_HOST_LINE_EMPLOYEES


const Employees = () => {

    const navigate = useNavigate()
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
        const Employees = { id, fname, lname, cpf, email, email, office, wage, birth, street, number, address }
        try {
            const response = await fetch('http://localhost:3100/product',
                {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(Employees),
                })
            const data = await response.json()
            if (response.status === 200) {
                toast.success('Produto editado com sucesso')
                const newProducts = employees.map((employee) => {
                    if (employee.id === id) {
                        return Employees
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
                        <table className='tabela3'>
                            <thead>
                                <tr>
                                    <th className='stack3'>
                                        <h1 className='tituloTabela3'>Seus Funcionarios</h1>
                                    </th>
                                    <th colSpan={4} className='stack3'>
                                        <button disabled={false} variant="filled" className='botao3' onClick={() => navigate('/add-funcionarios')}>Adicionar</button>
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
                </Content>
            </MiniDrawer >
        </>
    )
}

export default Employees