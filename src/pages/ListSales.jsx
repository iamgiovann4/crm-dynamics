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
                    <TableContainer style={{ backgroundColor: 'transparent', boxShadow: 'none', width: '55%', margin: '0 auto' }} className='caixaTabela' component={Paper}>
                        <Box direction="row" className='stack'>
                            <h1>Suas Vendas</h1>
                        </Box>
                        <TextField
                            label="Search"
                            variant="outlined"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            style={{ marginBottom: '16px', marginTop: '16px', width: '100%' }}
                        />
                        <Table sx={{ maxWidth: '100%' }} aria-label="customized table">
                            <TableHead>
                                <TableRow >
                                    <StyledTableCell align='left'>Nmr. Pedido</StyledTableCell>
                                    <StyledTableCell align='left'>Cliente</StyledTableCell>
                                    <StyledTableCell align="left">Data da compra</StyledTableCell>
                                    <StyledTableCell align="left">Total</StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
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

export default ListSales