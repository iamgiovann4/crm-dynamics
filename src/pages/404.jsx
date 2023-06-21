import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useEffect } from 'react';
import MiniDrawer from '../components/MiniDrawer';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



export default function CustomizedTables() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [products, setProducts] = useState([]); {/* Atualiza os dados do Banco */ }

    const loadProducts = async () => {
        try {
            const response = await fetch('http://localhost:3100/product')
            const data = await response.json()
            setProducts(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadProducts()
    }, []) // [] = executa apenas uma vez quando o componente é montados

    const rows = products;


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredRows = rows.filter((row) =>
        row.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
                <TextField
                    label="Search"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ marginBottom: '16px' }}
                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                <StyledTableCell align="right">Calories</StyledTableCell>
                                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredRows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.price}</StyledTableCell>
                                    <StyledTableCell align="right">{row.stock}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
    );
}
