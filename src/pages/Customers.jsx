import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Content from '../components/Content'
import TableCustomers from '../components/TableCustomers'
import './TableAll.css'
import { useNavigate } from 'react-router-dom'
import MiniDrawer from '../components/MiniDrawer'
import clientes from '../images/clientes.svg'
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

function Customers() {
    const [clients, setClients] = useState(false);
    const [customersToEdit, setCustomersToEdit] = useState({})
    const [searchTerm, setSearchTerm] = useState('');

    console.log(customersToEdit)

    const navigate = useNavigate()

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

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

    // const CustomTextField = styled(TextField)({
    //     '& .MuiOutlinedInput-root': {
    //       '& fieldset': {
    //         border: 'none',
    //       },
    //     },
    //   });

    return (
        <>
            <MiniDrawer searchTerm={searchTerm} handleSearchChange={handleSearchChange}>
                <Content title='Clientes'>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <TextField
                            label="Pesquisar"
                            variant="outlined"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            style={{ marginBottom: '0px', marginTop: '60px', width: '95%', backgroundColor: 'white', boxShadow: ' 0px 0px 10px 1px rgba(0, 0, 0, 0.15)', borderRadius: '10px' }}
                        />
                    </Box>
                    <TableContainer style={{ backgroundColor: 'white', boxShadow: ' 0px 0px 10px 1px rgba(0, 0, 0, 0.15)', width: '95%', margin: '20px auto 0 auto', borderRadius: '10px' }} className='caixaTabela' component={Paper}>
                        <Box direction="row" className='stack'>
                            <h1 style={{ paddingLeft: '70px', paddingTop: '0px' }}>Seus Clientes</h1>
                            <button className='botao' disabled={false} variant="filled" onClick={() => navigate('/cadastro-cliente')}>Adicionar</button>
                        </Box>
                        <Table sx={{ minWidth: 500 }} aria-label="customized table">
                            <TableHead>
                                <TableRow >
                                    <StyledTableCell style={styles.coluna} align='left'>Nome</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Sobrenome</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">CPF</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Nascimento</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Telefone</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">E-mail</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Endereço</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Bairro</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">CEP</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">N°</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Complemento</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left"></StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {clients && clients.length > 0 &&
                                    <TableCustomers setClients={setClients} clients={clients} setCustomersToEdit={setCustomersToEdit} searchTerm={searchTerm} />}
                                {clients && clients.length === 0 &&
                                    <tr>
                                        <td colSpan={5}>
                                            <img src={clientes} alt="clientes" style={{ width: '100%' }} />
                                        </td>
                                    </tr>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Content>
            </MiniDrawer>
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

export default Customers