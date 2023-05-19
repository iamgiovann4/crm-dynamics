import React, { useEffect, useState } from 'react'
import './Produto.css'
import Box from '@mui/material/Box'
import TableProduct from '../components/TableProduct';

function Products() {
    const [products, setProducts] = useState(false); {/* Atualiza os dados do Banco */}
    const [openModal, setOpenModal] = useState(false); {/* Abrir e fechar o modal */}

    // console.log(products)

    // const OpenModal = () => {
    //     setOpenModal(true)
    // }

    // const CloseModal = () => {
    //     setOpenModal(false)
    // }

    const loadProducts = async () => {
        try {
            const response = await fetch('http://localhost:3100/product')
            const data = await response.json()
            setProducts(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadProducts()
    }, []) // [] = executa apenas uma vez quando o componente é montados

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Minha funcao de submit')
        console.log(event.target)
        const name = event.target.name.value 
        const price = event.target.price.value
        const stock = event.target.stock.value
        const product = {name, price, stock}
        console.log(product)
        try {
            const response = await fetch('http://localhost:3100/product',
            {
                method: 'POST',
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(product), 
            })
            const data = await response.json()
            console.log(data)
            setOpenModal(false)
            loadProducts()
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <>
        <h1>Páginas de Produtos</h1>
        <Box sx={{background: 'white'}}>

            <table  style={{background: 'white', boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.15)', borderRadius: '10px', margin: '50px auto', padding: '8px', width: '50%', height: 'auto'}}>
                <h1 style={styles.tabela}>Seus Produtos</h1>
                <button onClick={() => setOpenModal(true)}>Abrir Modal</button>
                <tr style={styles.tabela}>
                    <th style={styles.tabela}>Produto Quantidade Preço</th>
                    <th style={styles.tabela}>Preço</th>
                    <th style={styles.tabela}>Quantidade</th>
                </tr>
                {products &&
                    products.map(product => (
                    <TableProduct key={product.id} product={product} setProducts={setProducts} products={products}/>
                ))}
            </table>
        </Box>
        {openModal && 
            <Box className='modal' onClick={(event) => {
                if(event.target.className.includes('modal')){
                    setOpenModal(false)
                }
            }}>
                <Box className='container'>
                    <div className='xizinho'><p onClick={() => setOpenModal(false)}>X</p></div>
                    <h2>Cadastrar produtos</h2>
                    <form onSubmit={handleSubmit} className='formModal'>
                        <input type="text" name="name"  placeholder="Nome"/><br/>
                        <input type="text" name="price"  placeholder="Preço"/><br/>
                        <input type="int" name="stock"  placeholder="Quantidade"/><br/><br/>
                        <button className='enviar' type='submit'>Enviar</button><br/>
                        <button className='fechar' onClick={() => setOpenModal(false)}>Fechar</button>
                    </form>
                </Box>
            </Box>
        }
      </>
    )
  }

  const styles = {
    tabela: {
        margin: '2px',
        padding: '10px'
    }
  }

export default Products