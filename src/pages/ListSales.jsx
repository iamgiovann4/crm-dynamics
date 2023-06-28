import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Content from '../components/Content'
import { toast } from 'react-toastify'
import MiniDrawer from '../components/MiniDrawer'
import pe1 from '../images/pe1.svg'
import './TableAll.css'
import './Modal.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import TableSales from '../components/TableSales'
// const hostProduct = process.env.REACT_APP_HOST_LINE_PRODUCT

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


function ListSales() {
    const [sales, setSales] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const loadSales = async () => {
        try {
            const response = await fetch('http://localhost:3100/sales')
            const data = await response.json()
            setSales(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadSales()
    }, []) // [] = executa apenas uma vez quando o componente é montados



    return (
        <>
            <MiniDrawer searchTerm={searchTerm} handleSearchChange={handleSearchChange}>
                <Content title='Produtos'>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <TextField
                            label="Search"
                            variant="outlined"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            style={{ marginBottom: '0px', marginTop: '60px', width: '90%', backgroundColor: 'white', boxShadow: ' 0px 0px 10px 1px rgba(0, 0, 0, 0.15)', borderRadius: '10px' }}
                        />
                    </Box>
                    <TableContainer style={{ backgroundColor: 'white', boxShadow: ' 0px 0px 10px 1px rgba(0, 0, 0, 0.15)', width: '90%', margin: '20px auto 0 auto', borderRadius: '10px' }} className='caixaTabela' component={Paper}>
                        <Box direction="row" className='stack'>
                            <h1 style={{ paddingLeft: '70px', paddingTop: '0px' }}>Suas Vendas</h1>
                        </Box>
                        <Table sx={{ minWidth: 500 }} aria-label="customized table">
                            <TableHead>
                                <TableRow >
                                    <StyledTableCell style={styles.coluna} align='left'>Nmr. Pedido</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align='left'>Cliente</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Data da compra</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Total</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sales && sales.length > 0 &&
                                    <TableSales setSales={setSales} sales={sales} searchTerm={searchTerm} />}
                                {sales && sales.length === 0 &&
                                    <tr>
                                        <td colSpan={5}>
                                            <img src={pe1} alt="pe1" style={{ width: '100%' }} />
                                        </td>
                                    </tr>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Content >
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

export default ListSales