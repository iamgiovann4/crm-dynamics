import { useState } from 'react'
import Box from '@mui/material/Box'
import { FaTrash as IconTrash, FaEdit as IconEdit } from 'react-icons/fa'
import '../pages/Produto.css'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'


const TableClient = ({product, setProducts, products}) => {

  const [modalOpen, setOpenModal] = useState(false)
  const [name, setName] = useState(product.name)
  const [price, setPrice] = useState(product.price)
  const [stock, setStock] = useState(product.stock)
  
  const handleEdit = async (event) => {
    event.preventDefault()
    const id = parseInt(event.target.id.value)
    const name = event.target.name.value 
    const price = event.target.price.value
    const stock = event.target.stock.value
    const userEdited = {id, name, price, stock}
    try {
      const response = await fetch('http://localhost:3100/product',
      {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userEdited), 
      })
      const data = await response.json()
      if(response.status === 200) {
      console.log(data)
      const newProducts = products.map((product) => {
        if(product.id === id) {
          return userEdited
        }
        return product
      })
      setProducts(newProducts)
      setOpenModal(false)
    } else {
      alert(data.message)
      console.log(data)
    }
    } catch (error) {
      console.log(error)
    }
  }

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
      const newProducts = products.filter((product) => product.id !== id)
      setProducts(newProducts)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <tr>
          <td style={{borderBottom: '1px solid #ddd',  padding: '15px 23px' }}>{product.name}</td>
          <td style={{borderBottom: '1px solid #ddd',  padding: '15px 23px' }}>{product.price}</td>
          <td style={{borderBottom: '1px solid #ddd',  padding: '15px 23px' }}>{product.stock}</td>

          <td style={{borderBottom: '1px solid #ddd',  padding: '15px 23px' }}>
            <IconEdit style={{width: '20px', cursor: 'pointer' }}
            onClick={() => setOpenModal(true)}/>
          </td>
          <td style={{borderBottom: '1px solid #ddd',  padding: '15px 23px' }}>
            <IconTrash style={{height: '20px', cursor: 'pointer', alignItems: 'center', color: 'red'}} onClick={() => deleteUser(product.id)}/>
          </td>
      </tr>

      {modalOpen && 
        <Box className='modal' onClick={(event) => {
          if(event.target.className.includes('modal')){
            setOpenModal(false)
          }
        }}>
          <Box className='container'>
            <div className='xizinho'><p onClick={() => setOpenModal(false)}>X</p></div>
            <h2>Editar Produto</h2>
            <form onSubmit={handleEdit} className='formModal'>
              <input type="hidden" name="id" value={product.id} />
              <input type="text" name="name"  placeholder="Nome" value={name} onChange={e => setName(e.target.value)} /><br/>
              <input type="text" name="price"  placeholder="Preço" value={price} onChange={e => setPrice(e.target.value)} /><br/>
              <input type="int" name="stock"  placeholder="Quantidade" value={stock} onChange={e => setStock(e.target.value)} /><br/><br/>
              <button className='enviar' type='submit'>Editar</button><br/>
              <button className='fechar' onClick={() => setOpenModal(false)}>Fechar</button>
            </form>
          </Box>
        </Box>
      }
    </> 
  )
}

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default TableClient