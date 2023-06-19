import { useState } from 'react'
import { FaTrash as IconTrash, FaEdit as IconEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

const TableClient = ({ client, setClients, clients }) => {

  const navigate = useNavigate()

  const deleteClient = async (id) => {
    try {
      const response = await fetch('http://localhost:3100/client/' + id,
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
      <tr>
        <td style={{ borderBottom: '1px solid #ddd', padding: '5px 23px' }}>{client.fname}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '5px 23px' }}>{client.lname}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '5px 23px' }}>{client.cpf}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '5px 23px' }}>{client.dateOfBirth}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '5px 23px' }}>{client.phone}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '5px 23px' }}>{client.email}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '5px 23px' }}>{client.address}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '5px 23px' }}>{client.street}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '5px 23px' }}>{client.cep}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '5px 23px' }}>{client.houseNumber}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '5px 23px' }}>{client.referencePoint}</td>

        <td style={{ borderBottom: '1px solid #ddd', padding: '5px 23px' }}>
          <IconEdit style={{ width: '20px', cursor: 'pointer' }}
            onClick={() => navigate('/cliente-edit', {state: client})} />
        </td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '15px 23px' }}>
          <IconTrash style={{ height: '20px', cursor: 'pointer', alignItems: 'center', color: 'red' }} onClick={() => deleteClient(client.id)} />
        </td>
      </tr>
    </>
  )
}

export default TableClient