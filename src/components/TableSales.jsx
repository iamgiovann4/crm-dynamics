import moment from 'moment-timezone';
import Box from '@mui/material/Box'
import Hashids from 'hashids'
import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { CgMoreO } from 'react-icons/cg'
import { border } from '@mui/system';

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
        backgroundColor: "#f1f1f1"
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
    console.log(rows)


    return (
        <>
            {filteredRows.sort((a, b) => b.id - a.id).map((row) => (
                <StyledTableRow key={row.id}>
                    <StyledTableCell style={styles.dadosTabela} align="left" scope="row">
                        #{hashids.encode(row.id)}
                    </StyledTableCell>
                    <StyledTableCell style={styles.dadosTabela} align="left">
                        {row.fname}
                    </StyledTableCell>
                    <StyledTableCell style={styles.dadosTabela} align="left">
                        <DataFormatada dataString={row.date} />
                    </StyledTableCell>
                    <StyledTableCell style={styles.dadosTabela} align="left">
                        {row.valor}
                    </StyledTableCell>
                    <StyledTableCell>
                        <CgMoreO size={24} onClick={() => showItems(row.id)}/>
                    </StyledTableCell>
                </StyledTableRow>
            ))}

            {openModal && (
                <tr key="modal">
                    <td>
                        <Box sx={{ zIndex: '9999999999' }} className='modal' onClick={(event) => {
                            if (event.target.className.includes('modal')) {
                                setOpenModal(false);
                            }
                        }}>
                            <Box sx={{backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 0px 40px 20px rgba(0, 0, 0, 0.25)', height: '450px', width: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    width: '83%',
                                    color: '#252525',
                                    fontWeight: 'bolder',
                                    fontSize: '20px',
                                    cursor: 'pointer',
                                    marginTop: '-100px',
                                    marginTop: '-100px'}} >
                                    <p onClick={() => setOpenModal(false)}>X</p>
                                </div>
                                <h2 style={{fontSize: '25px', color: "linear-gradient(90deg, #0070C0 0%, rgba(15, 154, 254, 0.7) 100%)"}}>Produtos Comprados</h2>
                                <table style={{ border: '1px solid black', padding: '10px' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ padding: '5px' }}>Produto</th>
                                            <th style={{  padding: '5px' }}>Quantidade</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {items.map((item, index) => (
                                            <>
                                                <tr key={index}  style={{ border: '1px solid black'}}>
                                                    <td style={{ padding: '5px' }}>{item.name}</td>
                                                    <td style={{ padding: '5px', textAlign: 'center' }}>{item.qtd}x</td>
                                                </tr>
                                            </>
                                        ))}
                                    </tbody>
                                </table >
                            </Box>
                        </Box>
                    </td>
                </tr>
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
        paddingBottom: '10px'
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
