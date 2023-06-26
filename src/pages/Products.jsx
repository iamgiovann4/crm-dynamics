import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Content from '../components/Content'
import TableProduct from '../components/TableProduct'
import { toast } from 'react-toastify'
import MiniDrawer from '../components/MiniDrawer'
import pe1 from '../images/pe1.svg'
import './TableAll.css'
import './Modal.css'
import { API_SERVER } from '../config'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
// const hostProduct = process.env.REACT_APP_HOST_LINE_PRODUCT

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

function Products() {
    const [products, setProducts] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [productToEdit, setProductToEdit] = useState({})

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const loadProducts = async () => {
        try {
            const response = await fetch(`${API_SERVER}/product`)
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

    console.log(handleSubmit)

    return (
        <>
            <MiniDrawer searchTerm={searchTerm} handleSearchChange={handleSearchChange}>
                <Content title='Produtos'>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <TextField
                            label="Pesquisar"
                            variant="outlined"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            style={{ marginBottom: '0px', marginTop: '60px', width: '60%', backgroundColor: 'white', boxShadow: ' 0px 0px 10px 1px rgba(0, 0, 0, 0.15)', borderRadius: '10px' }}
                        />
                    </Box>
                    <TableContainer style={{ backgroundColor: 'white', boxShadow: ' 0px 0px 10px 1px rgba(0, 0, 0, 0.15)', width: '60%', margin: '20px auto 0 auto', borderRadius: '10px' }} className='caixaTabela' component={Paper}>
                        <Box direction="row" className='stack'>
                            <h1 style={{ paddingLeft: '70px', paddingTop: '0px' }}>Seus Produtos</h1>
                            <button className='botao' disabled={false} variant="filled" onClick={() => setOpenModal(true)}>Adicionar</button>
                        </Box>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow >
                                    <StyledTableCell style={styles.coluna} align='left'>Produtos</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Preço</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left">Quantidade</StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left"></StyledTableCell>
                                    <StyledTableCell style={styles.coluna} align="left"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products && products.length > 0 &&
                                    <TableProduct setProducts={setProducts} products={products} setProductToEdit={setProductToEdit} setOpenModalEdit={setOpenModalEdit} searchTerm={searchTerm} />}
                                {products && products.length === 0 &&
                                    <tr>
                                        <td colSpan={5}>
                                            <img src={pe1} alt="pe1" style={{ width: '100%' }} />
                                        </td>
                                    </tr>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

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
            </MiniDrawer >
        </>
    )
}

const styles = {
    coluna: {
        color: '#9e9e9e',
        borderBottom: '1px solid #ddd',
        paddingLeft: '20px',
        paddingBottom: '15px',
        fontWeight: 'bold',
        fontSize: '16px'
    }
}

export default Products