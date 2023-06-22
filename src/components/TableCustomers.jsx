import { FaTrash as IconTrash, FaEdit as IconEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { API_SERVER } from '../config';

const TableClient = ({ client, setClients, clients, index }) => {

  const backgroundColor = index % 2 === 0 ? '#F1F1F1' : 'white';
  const navigate = useNavigate()

  const deleteClient = async (id) => {
    try {
      const response = await fetch(`${API_SERVER}/client/` + id,
        {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          }
        })
      const data = await response.json()
      console.log(data)
      toast.success('Cliente deletado com sucesso!')
      const newClients = clients.filter((client) => client.id !== id)
      setClients(newClients)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <tr style={{backgroundColor}}>
        <td style={styles.dadosTabela}>{client.fname}</td>
        <td style={styles.dadosTabela}>{client.lname}</td>
        <td style={styles.dadosTabela}>{client.cpf}</td>
        <td style={styles.dadosTabela}>{client.dateOfBirth}</td>
        <td style={styles.dadosTabela}>{client.phone}</td>
        <td style={styles.dadosTabela}>{client.email}</td>
        <td style={styles.dadosTabela}>{client.address}</td>
        <td style={styles.dadosTabela}>{client.street}</td>
        <td style={styles.dadosTabela}>{client.cep}</td>
        <td style={styles.dadosTabela}>{client.houseNumber}</td>
        <td style={styles.dadosTabela}>{client.referencePoint}</td>

        <td style={styles.dadosTabela}>
          <IconEdit size={20} style={styles.edit}
            onClick={() => navigate('/cliente-edit', {state: client})} />
        </td>
        <td style={styles.dadosTabela}>
          <IconTrash size={20} style={styles.delete} onClick={() => deleteClient(client.id)} />
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
    fill: '#222',
    
  },
  delete: {
    cursor: 'pointer',
    alignItems: 'center',
    fill: 'red',
  }
}

export default TableClient