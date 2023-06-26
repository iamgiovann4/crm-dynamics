//Pág dos funcionarios da empresa que forem cadastrados no sign up, essa pág também terá uma tabela
import Content from "../components/Content"
import React, { useEffect, useState } from 'react'
import './TableAll.css'
import Box from '@mui/material/Box'
import TableEmployees from '../components/TableEmployees'
import MiniDrawer from '../components/MiniDrawer'
import { useNavigate } from "react-router"
import { API_SERVER } from "../config"

const Employees = () => {

    const navigate = useNavigate()
    const [employees, setEmployees] = useState(false);

    const [openModalEdit, setOpenModalEdit] = useState(false);
    console.log(openModalEdit)

    const loadEmployees = async () => {
        try {
            const response = await fetch(`${API_SERVER}/employees`)
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

    return (
        <>
            <MiniDrawer>
                <Content title='Funcionarios'>
                    <Box className='caixaTabela'>
                        <table className='tabela'>
                            <thead>
                                <tr>
                                    <th colSpan={12} >
                                        <Box direction="row" className='stack'>
                                            <h1 className='tituloTabela'>Seus Funcionarios</h1>
                                            <button disabled={false} variant="filled" className='botao' onClick={() => navigate('/add-funcionarios')}>Adicionar</button>
                                        </Box>
                                    </th>
                                </tr>

                                <tr>
                                    <th className='coluna' align='left'>Nome</th>
                                    <th className='coluna' align='left'>Sobrenome</th>
                                    <th className='coluna' align='left'>CPF</th>
                                    <th className='coluna' align='left'>E-mail</th>
                                    <th className='coluna' align='left'>Cargo</th>
                                    <th className='coluna' align='left'>Salario</th>
                                    <th className='coluna' align='left'>Nascimento</th>
                                    <th className='coluna' align='left'>Rua</th>
                                    <th className='coluna' align='left'>Numero</th>
                                    <th className='coluna' align='left'>Bairro</th>
                                    <th className='coluna' align='left'></th>
                                    <th className='coluna' align='left'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees &&
                                    employees.map((employee, index) => (
                                        <TableEmployees index={index} key={employee.id} employee={employee} setEmployees={setEmployees} employees={employees} setOpenModalEdit={setOpenModalEdit} />
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