import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Content from '../components/Content'
import TableProduct from '../components/TableProduct'
import { toast } from 'react-toastify'
import MiniDrawer from '../components/MiniDrawer'
import { Container, InputAdornment, TextField } from "@mui/material";
import { Autocomplete } from '@mui/material';
import { Button } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import pe1 from "../images/pe1.svg"

const TableFilter = () => {

    const [filtro, setFiltro] = useState('');
    const [opcoesFiltradas, setOpcoesFiltradas] = useState([]);


    const handleChangeFiltro = (event, value) => {

        if (value !== null) {
            setFiltro(value);
            setOpcoesFiltradas(
                protudos.filter((option) =>
                    option.name && option.name.toLowerCase().includes(value.toLowerCase())
                )
            );
        };
        };

        // filtro do filtertable


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
        // console.log(handleSubmit)

        const [protudos, setProdutos] = useState([]); {/* Atualiza os dados do Banco */ }

        const loadProdutos = async () => {
            try {
                const response = await fetch('http://localhost:3100/product')
                const data = await response.json()
                setProdutos(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        useEffect(() => {
            loadProdutos()
        }, []) // [] = executa apenas uma vez quando o componente é montados


        return (

            <>
                <Container maxWidth="md" sx={{ mt: 10, display: 'flex', direction: 'row' }} >

                    <Autocomplete
                        onChange={handleChangeFiltro}
                        id="free-solo-demo"
                        freeSolo
                        options={protudos.map(option => option.name)}
                        renderInput={(params) => (
                            <TextField {...params} label="freeSolo" margin="normal" variant="outlined" sx={{ width: '45rem' }} id='inputfield' />
                        )}
                    />
                    <Button variant="contained" sx={{ height: '3.5rem', mt: 2 }} onClick={handleChangeFiltro}><SearchIcon /></Button>

                </Container>

                <MiniDrawer>
                    <Content title="Produtos">
                        <Box className="caixaTabela">
                            {/* Restante do código do MiniDrawer aqui */}

                            {/* Componente Autocomplete para filtrar */}
                            <Autocomplete
                                id="free-solo-demo"
                                freeSolo
                                options={protudos.map((option) => option.name)}
                                value={filtro}
                                onChange={handleChangeFiltro}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="freeSolo"
                                        margin="normal"
                                        variant="outlined"
                                        sx={{ width: '45rem' }}
                                    />
                                )}
                            />

                            {/* Tabela com as opções filtradas */}
                            <table className="tabela">
                                {/* Restante do código da tabela */}
                                <tbody>
                                    {opcoesFiltradas.length > 0 ? (
                                        opcoesFiltradas.map((product, index) => (
                                            <TableProduct
                                                index={index}
                                                key={product.id}
                                                product={product}
                                                setProducts={setProducts}
                                                products={products}
                                                setProductToEdit={setProductToEdit}
                                                setOpenModalEdit={setOpenModalEdit}
                                            />
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={5}>Nenhum produto encontrado.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            {/* Restante do código do modal */}
                        </Box>
                    </Content>
                </MiniDrawer>
            </>);
    };

    export default TableFilter;
