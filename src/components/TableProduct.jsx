import { FaTrash as IconTrash, FaEdit as IconEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'

const TableProduct = ({product, setProducts, products, setProductToEdit, setOpenModalEdit, index}) => {

  const backgroundColor = index % 2 === 0 ? '#F1F1F1' : 'white';

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
      <tr style={{backgroundColor}}>
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
      </tr>
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