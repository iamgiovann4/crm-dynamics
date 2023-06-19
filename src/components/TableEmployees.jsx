import { useState } from 'react'
import Box from '@mui/material/Box'
import { FaTrash as IconTrash, FaEdit as IconEdit } from 'react-icons/fa'
import '../pages/employees.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'


const TableEmployee = ({employee, setEmployees, employees, setOpenModalEdit}) => {

  const navigate = useNavigate()

  const deleteUser = async (id) => {
    try {
      const response = await fetch('http://localhost:3100/product/'+id,
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
      <tr >
          <td style={{borderBottom: '1px solid #ddd',  padding: '15px 23px' }}>{employee.fname}</td>
          <td style={{borderBottom: '1px solid #ddd', padding: '15px 23px'}}>{employee.lname}</td>
          <td  style={{borderBottom: '1px solid #ddd', padding: '15px 23px'}}>{employee.cpf}</td>
          <td  style={{borderBottom: '1px solid #ddd', padding: '15px 23px'}}>{employee.email}</td>
          <td  style={{borderBottom: '1px solid #ddd', padding: '15px 23px'}}>{employee.office}</td>
          <td  style={{borderBottom: '1px solid #ddd', padding: '15px 23px'}}>{employee.wage}</td>
          <td  style={{borderBottom: '1px solid #ddd', padding: '15px 23px'}}>{employee.birth}</td>
          <td  style={{borderBottom: '1px solid #ddd', padding: '15px 23px'}}>{employee.street}</td>
          <td  style={{borderBottom: '1px solid #ddd', padding: '15px 23px'}}>{employee.number}</td>
          <td  style={{borderBottom: '1px solid #ddd', padding: '15px 23px'}}>{employee.address}</td>

          <td style={{borderBottom: '1px solid #ddd', padding: '15px 23px'}}>
            <IconEdit style={{width: '20px', cursor: 'pointer' }}
            onClick={() => navigate('/funcionarios-edit', {state: employee})} />
          </td>
          <td style={{borderBottom: '1px solid #ddd', padding: '15px 23px'}}>
            <IconTrash style={{height: '20px', cursor: 'pointer', alignItems: 'center', color: 'red'}} onClick={() => deleteUser(employee.id)}/>
          </td>
      </tr>
    </> 
  )
}

export default TableEmployee