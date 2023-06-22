import { FaTrash as IconTrash, FaEdit as IconEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { API_SERVER } from '../config';

const TableEmployee = ({employee, setEmployees, employees, setOpenModalEdit, index}) => {

  const backgroundColor = index % 2 === 0 ? '#F1F1F1' : 'white';
  const navigate = useNavigate()

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API_SERVER}/product/` +id,
      {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        }
      })
      const data = await response.json()
      toast.success('Produto Deletado com sucesso')
      const newProducts = employees.filter((employee) => employee.id !== id)
      setEmployees(newProducts)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <tr style={{backgroundColor}}>
          <td style={styles.dadosTabela}>{employee.fname}</td>
          <td style={styles.dadosTabela}>{employee.lname}</td>
          <td style={styles.dadosTabela}>{employee.cpf}</td>
          <td style={styles.dadosTabela}>{employee.email}</td>
          <td style={styles.dadosTabela}>{employee.office}</td>
          <td style={styles.dadosTabela}>{employee.wage}</td>
          <td style={styles.dadosTabela}>{employee.birth}</td>
          <td style={styles.dadosTabela}>{employee.street}</td>
          <td style={styles.dadosTabela}>{employee.number}</td>
          <td style={styles.dadosTabela}>{employee.address}</td>

          <td style={styles.dadosTabela}>
            <IconEdit size={20} style={styles.edit}
            onClick={() => navigate('/funcionarios-edit', {state: employee})} />
          </td>
          <td style={styles.dadosTabela}>
            <IconTrash size={20} style={styles.delete} onClick={() => deleteUser(employee.id)}/>
          </td>
      </tr>
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