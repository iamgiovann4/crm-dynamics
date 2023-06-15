import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Content from '../components/Content'
import Header from '../components/Header'
import TableProduct from '../components/TableProduct'
import './products.css'
import { toast } from 'react-toastify'

// Restante do seu código...

const hostProduct = process.env.REACT_APP_HOST_LINE_PRODUCT 

function Products() {
    const [products, setProducts] = useState(false); {/* Atualiza os dados do Banco */ }
    const [openModal, setOpenModal] = useState(false); {/* Abrir e fechar o modal */ }

    // console.log(products)
    // const OpenModal = () => {
    //     setOpenModal(true)
    // }
    // const CloseModal = () => {
    //     setOpenModal(false)
    // }

    const loadProducts = async () => {
        try {
            const response = await fetch(hostProduct)
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

    return (
        <>
            <Content>
                <Header />
                <Box sx={{ display: 'flex' }}>
                    <table className='tabela'>
                        <tr>
                            <th colSpan={5}>
                                <Stack className='stack' container direction="row">
                                    <h1 className='tituloTabela'>Seus Produtos</h1>
                                    <button className='botao' disabled={false} variant="filled" onClick={() => setOpenModal(true)}>Adicionar</button>
                                </Stack>
                            </th>
                        </tr>

                        <tr>
                            <th className='coluna' align="left">Produto</th>
                            <th className='coluna' align="left">Preço</th>
                            <th className='coluna' align="left">Quantidade</th>
                            <th className='coluna' align="left"></th>
                            <th className='coluna' align="left"></th>
                        </tr>
                        {products.length > 0  ?
                            products.map(product => (
                                <TableProduct key={product.id} product={product} setProducts={setProducts} products={products} />
                            )):  (
                            <tr>
                                <td colSpan={10}>Nenhum cliente cadastrado</td>
                            </tr>
                            )}
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
            </Content>
        </>
    )
}

export default Products