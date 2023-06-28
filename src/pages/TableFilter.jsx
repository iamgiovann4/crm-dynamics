import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Content from '../components/Content'
import TableProduct from '../components/TableProduct'
import MiniDrawer from '../components/MiniDrawer'
import { Container, TextField } from "@mui/material";
import { Autocomplete } from '@mui/material';
import { Button } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";

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

    const [products, setProducts] = useState(false); 

    const [openModalEdit, setOpenModalEdit] = useState(false); 
    const [productToEdit, setProductToEdit] = useState({})

    console.log(openModalEdit)
    console.log(productToEdit)

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

    // const response =  fetch('http://localhost:3100/product')
    // const data =  response.json()
    // console.log(handleSubmit)

    const [protudos, setProdutos] = useState([]);
    console.log(setProdutos)

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
