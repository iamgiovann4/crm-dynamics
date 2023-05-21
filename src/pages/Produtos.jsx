import React, { useEffect, useState } from 'react'
import './Produto.css'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import TableProduct from '../components/TableProduct'

// import Sidebar from '../components/Sidebar'
// import Grid from '@mui/material/Grid'
// import Button from '@mui/material/Button'

import Skeleton from '@mui/material/Skeleton';

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
        } catch (error) {
            console.log(error)
        }
    }
 const [loading, setLoading] = useState(true);

        useEffect(() => {
          // Simulando um atraso de carregamento
          setTimeout(() => {
            // Após o atraso, define o estado "loading" como false para mostrar o conteúdo
            setLoading(false);
          }, 2000);
        }, []);
    return (
        <>
            <Box sx={{ background: 'white' }}>
                <table style={{ boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.15)', borderRadius: '10px', padding: '30px', margin: '50px auto', width: '50%', height: 'auto' }}>


                    <tr>
                        <th colSpan={5}>
                            <Stack container direction="row" sx={{ alignItems: 'center', margin: '0 0 0 auto', width: '100%', justifyContent: 'space-between', paddingBottom: '30px' }}>
                                <h1>Seus Produtos</h1>
                                <button disabled={false} variant="filled" style={{ height: '40px', width: '150px', borderRadius: '8px', background: '#0F9AFE', border: '0px', color: 'white' }} onClick={() => setOpenModal(true)}>Adcionar</button>
                            </Stack>
                        </th>
                    </tr>

                    {loading ? ( // Verifica se o conteúdo está carregando

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >
                            {/* Se estiver carregando, exibe os componentes Skeleton */}
                            <Skeleton variant="text" width={300} height={100} animation="wave" />
                            <Skeleton variant="text" width={300} height={40} animation="wave" />


                            <Skeleton variant="text" width={200} height={40} animation="wave" />
                            <Skeleton variant="text" width={200} height={40} animation="wave" />
                            <Skeleton variant="retangle" width={600} height={80} animation="wave" />
                        </Box>
                    ) : (
                        <>
                            <tr style={styles.tabela}>
                                <th align="left" style={styles.tabela}>Produto</th>
                                <th align="left" style={styles.tabela}>Preço</th>
                                <th align="left" style={styles.tabela}>Quantidade</th>
                                <th align="left" style={styles.tabela}></th>
                                <th align="left" style={styles.tabela}></th>
                            </tr>
                            {products &&
                                products.map(product => (
                                    <TableProduct key={product.id} product={product} setProducts={setProducts} products={products} />
                                ))}

                        </>
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
        </>
    )
}

const styles = {
    tabela: {
        background: 'white',
        fontSize: '24px',
        fontStyle: 'normal',
        lineHeight: '34px',
        color: '#252525'
    }
}

export default Products