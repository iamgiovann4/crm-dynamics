// import { useState } from 'react'
import Box from '@mui/material/Box'
// import { FaTrash as IconTrash, FaEdit as IconEdit } from 'react-icons/fa'
import { Table } from 'react-bootstrap'

const TableProduct = ({product, setProducts, products}) => {

//   const [modalOpen, setModalOpen] = useState(false)
//   const [name, setName] = useState(product.name)
//   const [price, setPrice] = useState(product.price)
//   const [stock, setStock] = useState(product.stock)
  
//   const handleEdit = async (event) => {
//     event.preventDefault()
//     const id = parseInt(event.target.id.value)
//     const name = event.target.name.value 
//     const price = event.target.price.value
//     const stock = event.target.stock.value
//     const userEdited = {id, name, price, stock}
//     try {
//       const response = await fetch('http://localhost:3100/product',
//       {
//         method: 'PUT',
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userEdited), 
//       })
//       const data = await response.json()
//       if(response.status === 200) {
//       console.log(data)
//       const newProducts = products.map((product) => {
//         if(product.id === id) {
//           return userEdited
//         }
//         return product
//       })
//       setProducts(newProducts)
//       setModalOpen(false)
//     } else {
//       alert(data.message)
//       console.log(data)
//     }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const deleteUser = async (id) => {
//     try {
//       const response = await fetch('http://localhost:3100/product/'+id,
//       {
//         method: 'DELETE',
//         headers: {
//           "Content-Type": "application/json",
//         }
//       })
//       const data = await response.json()
//       console.log(data)
//       const newProducts = products.filter((product) => product.id !== id)
//       setUsers(newProducts)
//     } catch (error) {
//       console.log(error)
//     }
//   }

  return (
    <>
        <tr style={styles.tabela}>
            <td style={styles.tabela}>{product.name}</td>
            <td style={styles.tabela}>{product.price}</td>
            <td style={styles.tabela}>{product.stock}</td>
        </tr>
    </> 
  )
}

const styles = {
    tabela: {
        border: '1px solid black',
        margin: '2px',
        padding: '5px'
    }
  }

export default TableProduct

 /* <Box> */
        /* <Table> */
            /* <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
            </tr> */
            
        /* </Table> */

        /* <IconTrash style={{width: '15px', height: '15px', position: 'absolute', top: '20px', right: '20px', padding: '10px', cursor: 'pointer' }}
          onClick={() => deleteUser(user.id)}
        />
         <IconEdit style={{width: '17px', height: '17px', position: 'absolute', top: '19px', right: '50px', padding: '10px', cursor: 'pointer' }}
          onClick={() => setModalOpen(true)}
        /> */
    /* </Box> */
    /* {modalOpen && 
      <Box className="bgModal" onClick={(event) => {
        if(event.target.className.includes('bgModal')) {
          setModalOpen(false)
        }
      }} sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#000000A0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9
        }}>
          <Box sx={{
            width: '500px',
            height: '300px',
            background: '#FFF',
            borderRadius: '10px',
            padding: '20px',
          }}>
            <h1>Editar User</h1>
            <form onSubmit={handleEdit}>
              <input type="hidden" name="id" value={user.id} />
              <input type="text" name="name" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} /><br />
              <input type="text" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/><br />
              <input type="password" name="pass" placeholder="Senha" value={pass} onChange={e => setPass(e.target.value)}/><br />
              <input type="text" name="avatar" placeholder="Avatar" value={avatar} onChange={e => setAvatar(e.target.value)}/><br />
              <br />
              <button type="submit">Editar</button>
            </form>
          </Box> 
      </Box>
    } */