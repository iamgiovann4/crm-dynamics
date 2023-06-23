import { FaTrash as IconTrash, FaEdit as IconEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react'

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

function createData(name, price, stock) {
  return { name, price, stock };
}

const TableProduct = ({ setProducts, products, setProductToEdit, setOpenModalEdit, searchTerm }) => {

  // const backgroundColor = index % 2 === 0 ? '#F1F1F1' : 'white';
  const rows = products;

  const deleteUser = async (id) => {
    try {
      const response = await fetch('http://localhost:3100/product/' + id,
        {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          }
        })
      const data = await response.json()
      console.log(data)
      toast.success('Produto Deletado com sucesso!')
      const newProducts = products.filter((product) => product.id !== id)
      setProducts(newProducts)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(rows)
  console.log(searchTerm)
  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {filteredRows.map((row) => (
        <StyledTableRow key={row.name}>
          <StyledTableCell component="th" scope="row">
            {row.name}
          </StyledTableCell>
          <StyledTableCell style={styles.dadosTabela} align="left">{row.price}</StyledTableCell>
          <StyledTableCell style={styles.dadosTabela} align="left">{row.stock}</StyledTableCell>
          <StyledTableCell style={styles.dadosTabela} align="left">
            <IconEdit size={20} style={styles.edit}
              onClick={() => {
                setProductToEdit(row)
                setOpenModalEdit(true)
              }} />
          </StyledTableCell>
          <StyledTableCell style={styles.dadosTabela} align="left">
            <IconTrash size={16} style={styles.delete} onClick={() => deleteUser(row.id)} />
          </StyledTableCell>
        </StyledTableRow>
      ))}

      {/* <tr style={{backgroundColor}}>
          <td style={styles.dadosTabela}>{product.name}</td>
          <td style={styles.dadosTabela}>{product.price}</td>
          <td  style={styles.dadosTabela}>{product.stock}</td>

          <td style={styles.dadosTabela}>
            <IconEdit size={20} style={styles.edit}
            onClick={() => {
              setProductToEdit(product)
              setOpenModalEdit(true) 
            }}/>
          </td>
          <td style={styles.dadosTabela}>
            <IconTrash size={16} style={styles.delete} onClick={() => deleteUser(product.id)}/>
          </td>
      </tr> */}
    </>
  )
}

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
    fill: '#222'
  },
  delete: {
    with: '20px',
    height: '20px',
    cursor: 'pointer',
    alignItems: 'center',
    fill: 'red'
  }
}

export default TableProduct