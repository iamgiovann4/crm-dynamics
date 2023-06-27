import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Content from '../components/Content'
import TableEmployees from '../components/TableEmployees'
import './TableAll.css'
import { useNavigate } from 'react-router-dom'
import MiniDrawer from '../components/MiniDrawer'
// import clientes from '../images/clientes.svg'
import { API_SERVER } from '../config'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const Employees = () => {
    const navigate = useNavigate()
    const [employees, setEmployees] = useState(false);
    const [employeeslEdit, setEmployeesToEdit] = useState({});

    console.log(employeeslEdit)

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const loadEmployees = async () => {
        try {
            const response = await fetch(`${API_SERVER}/employees`)
            const data = await response.json()
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
            <MiniDrawer searchTerm={searchTerm} handleSearchChange={handleSearchChange}>
                <Content title='Funcionarios'>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <TextField
                            label="Pesquisar"
                            variant="outlined"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            style={{ marginBottom: '0px', marginTop: '60px', width: '90%', backgroundColor: 'white', boxShadow: ' 0px 0px 10px 1px rgba(0, 0, 0, 0.15)', borderRadius: '10px' }}
                        />
                    </Box>
                    <TableContainer style={{ backgroundColor: 'white', boxShadow: ' 0px 0px 10px 1px rgba(0, 0, 0, 0.15)', width: '90%', margin: '20px auto 0 auto', borderRadius: '10px' }} className='caixaTabela' component={Paper}>
                        <Box direction="row" className='stack'>
                            <h1 style={{ paddingLeft: '70px', paddingTop: '0px' }}>Seus Funcionarios</h1>
                            <button className='botao' disabled={false} variant="filled" onClick={() => navigate('/cadastro-funcionario')}>Adicionar</button>
                        </Box>
                        <Table sx={{ minWidth: 500 }} aria-label="customized table">
                            <TableHead>
                                <TableRow >
                                    <StyledTableCell style={styles.coluna} align='left'>Nome</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Sobrenome</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">CPF</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">E-mail</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Cargo</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Salario</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Nascimento</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Rua</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Numero</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Bairro</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left"></StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {employees && employees.length > 0 &&
                                    <TableEmployees setEmployees={setEmployees} employees={employees} setEmployeesToEdit={setEmployeesToEdit} searchTerm={searchTerm} />}
                                {employees && employees.length === 0 &&
                                    <tr>
                                        <td colSpan={5}>
                                            <img src={Employees} alt="funcionarios" style={{ width: '100%' }} />
                                        </td>
                                    </tr>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Content>
            </MiniDrawer >
        </>
    )
}

const styles = {
    coluna: {
        color: '#9e9e9e',
        borderBottom: '1px solid #ddd',
        paddingLeft: '20px',
        paddingBottom: '15px',
        fontWeight: 'bold',
        fontSize: '16px'
    }
}

export default Employees