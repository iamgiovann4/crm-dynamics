import { useState } from 'react'
import Box from '@mui/material/Box'
import { FaTrash as IconTrash, FaEdit as IconEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'

// import '../pages/Produto.css'
// import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
// import TableRow from '@mui/material/TableRow'
// import Paper from '@mui/material/Paper'

const TableProduct = ({product, setProducts, products, setProductToEdit, setOpenModalEdit}) => {

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
      console.log(data)
      toast.success('Produto Deletado com sucesso!')
      const newProducts = products.filter((product) => product.id !== id)
      setProducts(newProducts)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <tr >
          <td style={{borderBottom: '1px solid #ddd',  padding: '15px 23px' }}>{product.name}</td>
          <td style={{borderBottom: '1px solid #ddd', padding: '15px 23px'}}>{product.price}</td>
          <td  style={{borderBottom: '1px solid #ddd', padding: '15px 23px'}}>{product.stock}</td>

          <td style={{borderBottom: '1px solid #ddd', padding: '15px 23px'}}>
            <IconEdit style={{width: '20px', cursor: 'pointer' }}
            onClick={() => {
              setProductToEdit(product)
              setOpenModalEdit(true) 
            }}/>
          </td>
          <td style={{borderBottom: '1px solid #ddd', padding: '15px 23px'}}>
            <IconTrash style={{height: '20px', cursor: 'pointer', alignItems: 'center', color: 'red'}} onClick={() => deleteUser(product.id)}/>
          </td>
      </tr>
    </> 
  )
}

export default TableProduct