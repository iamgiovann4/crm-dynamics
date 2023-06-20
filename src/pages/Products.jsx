import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Content from '../components/Content'
import TableProduct from '../components/TableProduct'
import './products.css'
import pe1 from '../images/pe1.svg'
import { toast } from 'react-toastify'
import MiniDrawer from '../components/MiniDrawer'

// Restante do seu código...
// 
const hostProduct = process.env.REACT_APP_HOST_LINE_PRODUCT

function Products() {
    const [products, setProducts] = useState(false); {/* Atualiza os dados do Banco */ }
    const [openModal, setOpenModal] = useState(false); {/* Abrir e fechar o modal */ }
    
    const [openModalEdit, setOpenModalEdit] = useState(false); {/* Abrir e fechar o modal */ }
    const [productToEdit, setProductToEdit] = useState({})

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
        const product = { name, price, stock }
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
            toast.success('Produto criado com sucesso')
        } catch (error) {
            toast.error('Aconteceu um imprevisto, tente novamente mais tarde.')
        }

    }

    const handleEdit = async (event) => {
        event.preventDefault()
        const id = parseInt(event.target.id.value)
        const name = event.target.name.value
        const price = event.target.price.value
        const stock = event.target.stock.value
        const userEdited = { id, name, price, stock }
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
            if (response.status === 200) {
                toast.success('Produto editado com sucesso!')
                const newProducts = products.map((product) => {
                    if (product.id === id) {
                        return userEdited
                    }
                    return product
                })
                setProducts(newProducts)
                setOpenModalEdit(false)
            } else {
                alert(data.message)
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // const response =  fetch('http://localhost:3100/product')
    // const data =  response.json()
    console.log(handleSubmit)

    return (
        <>
            {/* <Container maxWidth="md" sx={{ mt: 10, display: 'flex', direction: 'row' }} >
                
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={userEdited.map((option) => option.name)}
                    renderInput={(params) => (
                        <TextField {...params} label="freeSolo" margin="normal" variant="outlined" sx={{ width: '45rem' }} />
                    )}
                />
                <Button variant="contained" sx={{ height: '3.5rem', mt: 2 }}><SearchIcon /></Button> 

             </Container> */}

            <MiniDrawer >
                <Content>
                    <Box sx={{ display: 'flex' }}>
                        <table className='tabela'>
                            <thead>
                                <tr>
                                    <th className='stack'>
                                        <h1 className='tituloTabela'>Seus Produtos</h1>
                                    </th>
                                    <th colSpan={4} className='stack'>
                                        <button className='botao' disabled={false} variant="filled" onClick={() => setOpenModal(true)}>Adicionar</button>
                                    </th>
                                </tr>
                                <tr>
                                    <th className='coluna' align="left">Produto</th>
                                    <th className='coluna' align="left">Preço</th>
                                    <th className='coluna' align="left">Quantidade</th>
                                    <th className='coluna' align="left"></th>
                                    <th className='coluna' align="left"></th>
                                </tr>
                            </thead>


                            <tbody>
                                {products.length > 0 ?
                                    products.map(product => (
                                        <TableProduct key={product.id} product={product} setProducts={setProducts} products={products} setProductToEdit={setProductToEdit} setOpenModalEdit={setOpenModalEdit} />
                                    )) : (
                                        <img src={pe1} alt="pe1"/>
                                    )}
                            </tbody>
                        </table>
                    </Box>
                    {openModal &&
                        <Box className='modal' onClick={(event) => {
                            if (event.target.className.includes('modal')) {
                                setOpenModal(false)
                            }
                        }}>
                            <Box className='container'>
                                <div className='xizinho'><p onClick={() => setOpenModal(false)}>X</p></div>
                                <h2>Cadastrar produtos</h2>
                                <form onSubmit={handleSubmit} className='formModal'>
                                    <input type="text" name="name" placeholder="Nome" /><br />
                                    <input type="text" name="price" placeholder="Preço" /><br />
                                    <input type="int" name="stock" placeholder="Quantidade" /><br /><br />
                                    <button className='enviar' type='submit'>Enviar</button><br />
                                    <button className='fechar' onClick={() => setOpenModal(false)}>Fechar</button>
                                </form>
                            </Box>
                        </Box>
                    }

                    {openModalEdit &&
                        <Box className='modal' onClick={(event) => {
                            if (event.target.className.includes('modal')) {
                                setOpenModalEdit(false)
                            }
                        }}>
                            <Box className='container'>
                                <div className='xizinho'><p onClick={() => setOpenModalEdit(false)}>X</p></div>
                                <h2>Editar Produto</h2>
                                <form onSubmit={handleEdit} className='formModal'>
                                    <input type="hidden" name="id" value={productToEdit.id} />
                                    <input type="text" name="name" placeholder="Nome" value={productToEdit.name} onChange={e => setProductToEdit({ ...productToEdit, name: e.target.value })} /><br />
                                    <input type="text" name="price" placeholder="Preço" value={productToEdit.price} onChange={e => setProductToEdit({ ...productToEdit, price: e.target.value })} /><br />
                                    <input type="int" name="stock" placeholder="Quantidade" value={productToEdit.stock} onChange={e => setProductToEdit({ ...productToEdit, stock: e.target.value })} /><br /><br />
                                    <button className='enviar' type='submit'>Editar</button><br />
                                    <button className='fechar' onClick={() => setOpenModalEdit(false)}>Fechar</button>
                                </form>
                            </Box>
                        </Box>
                    }
                </Content >
            </MiniDrawer>
        </>
    )
}

export default Products