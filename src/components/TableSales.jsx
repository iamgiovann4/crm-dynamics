import moment from 'moment-timezone';
import Box from '@mui/material/Box'
import Hashids from 'hashids'
import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { CgMoreO } from 'react-icons/cg'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
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

function DataFormatada({ dataString }) {
    const data = moment.utc(dataString).tz('America/Sao_Paulo');

    const dia = data.format('DD');
    const mes = data.format('MM');
    const ano = data.format('YYYY');

    return <span>{`${dia}/${mes}/${ano}`}</span>;
}

const TableSales = ({ setSales, sales, searchTerm }) => {

    const [items, setItems] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const rows = sales;
    const hashids = new Hashids('', 5)
    //   #{hashids.encode(row.id)}
    const loadItems = async (id) => {
        try {
            const response = await fetch(`http://localhost:3100/sales/${id}`);
            const data = await response.json();
            setItems(data)
            console.log(data)

            console.log(items)
        } catch (error) {
            console.log(error);
        }
    };

    const showItems = (id) => {
        setOpenModal(true)
        loadItems(id)
        console.log(items)
    }

    const filteredRows = rows.filter((row) =>
        hashids.encode(row.id).toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <>
            {filteredRows.map((row) => (
                <StyledTableRow key={row.id}>
                    <StyledTableCell style={styles.dadosTabela} align="left" scope="row">
                        #{hashids.encode(row.id)}
                    </StyledTableCell>
                    <StyledTableCell style={styles.dadosTabela} align="left" >{row.fname}</StyledTableCell>
                    <StyledTableCell style={styles.dadosTabela} align="left">
                        <DataFormatada dataString={row.date} />
                    </StyledTableCell>
                    <StyledTableCell style={styles.dadosTabela} align="left">
                        {row.valor}
                    </StyledTableCell>
                    <StyledTableCell>
                        <CgMoreO
                            size={24}
                            onClick={() => showItems(row.id)}>Itens</CgMoreO>
                    </StyledTableCell>
                </StyledTableRow>
            ))}

            {openModal && (
                <Box className='modal' onClick={(event) => {
                    if (event.target.className.includes('modal')) {
                        setOpenModal(false);
                    }
                }}>
                    <Box className='container'>
                        <div className='xizinho'>
                            <p onClick={() => setOpenModal(false)}>X</p>
                        </div>
                        <h2>Produtos Comprados</h2>
                        <ul>
                            {items.map((item, index) => (
                                <>
                                    <li key={index}>{item.name} - {item.qtd}x</li>
                                </>
                            ))}
                        </ul>
                    </Box>
                </Box>
            )}

        </>
    );
};

const styles = {
    dadosTabela: {
        color: '#252525',
        borderBottom: '1px solid #ddd',
        paddingRight: '20px',
        paddingLeft: '20px',
        paddingTop: '10px',
        paddingBottom: '10px',
    },
    edit: {
        cursor: 'pointer',
        fill: '#222',
    },
    delete: {
        with: '20px',
        height: '20px',
        cursor: 'pointer',
        alignItems: 'center',
        fill: 'red',
    },
};

export default TableSales;
