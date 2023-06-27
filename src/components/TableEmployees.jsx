import { FaTrash as IconTrash, FaEdit as IconEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { API_SERVER } from '../config';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

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

const TableEmployee = ({ setEmployees, employees, setEmployeesToEdit, searchTerm, index}) => {

  // const backgroundColor = index % 2 === 0 ? '#F1F1F1' : 'white';
  const navigate = useNavigate()
  const rows = employees;

  const deleteEmployees = async (id) => {
    try {
      const response = await fetch(`${API_SERVER}/product/` +id,
      {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        }
      })
      const data = await response.json()
      console.log(data)
      toast.success('Produto deletado com sucesso!')
      const newProducts = employees.filter((employee) => employee.id !== id)
      setEmployees(newProducts)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(`${rows} oii`)
  console.log(searchTerm)
  const filteredRows = rows.filter((row) =>
    row.fname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {filteredRows.map((row) => (
        <StyledTableRow key={row.fname}>
          <StyledTableCell component="th" scope="row">
            {row.fname}
          </StyledTableCell>
          <StyledTableCell style={styles.dadosTabela} align="left">{row.lname}</StyledTableCell>
          <StyledTableCell style={styles.dadosTabela} align="left">{row.cpf}</StyledTableCell>
          <StyledTableCell style={styles.dadosTabela} align="left">{row.email}</StyledTableCell>
          <StyledTableCell style={styles.dadosTabela} align="left">{row.office}</StyledTableCell>
          <StyledTableCell style={styles.dadosTabela} align="left">{row.wage}</StyledTableCell>
          <StyledTableCell style={styles.dadosTabela} align="left">{row.birth}</StyledTableCell>
          <StyledTableCell style={styles.dadosTabela} align="left">{row.street}</StyledTableCell>
          <StyledTableCell style={styles.dadosTabela} align="left">{row.number}</StyledTableCell>
          <StyledTableCell style={styles.dadosTabela} align="left">{row.address}</StyledTableCell>
          <StyledTableCell style={styles.dadosTabela} align="left">
            <IconEdit size={20} style={styles.edit}
              onClick={() => navigate('/editar-funcionario', { state: row })}
            />
          </StyledTableCell>
          <StyledTableCell style={styles.dadosTabela} align="left">
            <IconTrash size={20} style={styles.delete} onClick={() => deleteEmployees(row.id)} />
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </> 
  )
}

const styles = {
  dadosTabela: {
    color: '#252525',
    borderBottom: '1px solid #ddd',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  edit: {
    cursor: 'pointer',
    fill: '#222'
  },
  delete: {
    cursor: 'pointer',
    alignItems: 'center',
    fill: 'red'
  }
}

export default TableEmployee