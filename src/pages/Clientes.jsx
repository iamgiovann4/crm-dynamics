import React, { useEffect, useState } from 'react'
// import './Produto.css'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import TableProduct from '../components/TableProduct'
import Content from '../components/Content'
import Header from '../components/Header'

function Clientes() {
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
        const fname = event.target.fname.value
        const lname = event.target.lname.value
        const cpf = event.target.cpf.value
        const dateOfBirth = event.target.dateOfBirth.value
        const phone = event.target.phone.value
        const email = event.target.email.value
        const address = event.target.address.value
        const street = event.target.street.value
        const cep = event.target.cep.value
        const houseNumber = event.target.houseNumber.value
        const referencePoint = event.target.referencePoint.value
        const product = { fname, lname, cpf, dateOfBirth, phone, email, address, street, cep, houseNumber, referencePoint }
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
      <Content>
      <Header/>
        <Box sx={{ display: 'flex'}}>
            <table  style={{boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.15)', borderRadius: '10px', margin: '10px auto',  width: '50%', height: 'auto', background: 'white',  borderCollapse: 'collapse'}}>
            <tr>
                <th colSpan={5}>
                <Stack container direction="row" sx={{alignItems: 'center', margin: '0 0 0 auto', width: '100%', justifyContent: 'space-between', paddingBottom: '30px'}}>
                <h1 style={{paddingLeft: '45px', paddingTop: '10px'}}>Seus Clientes</h1>
                <button disabled={false} variant="filled" style={{height: '40px', width: '150px', borderRadius: '8px', background: '#0F9AFE' , border: '0px', color: 'white', marginRight: '45px', marginTop: '10px'}} onClick={() => setOpenModal(true)}>Adicionar</button>
                </Stack>
                </th>
            </tr>
                <tr>
                    <th align="left">Nome</th>
                    <th align="left">CPF</th>
                    <th align="left">Nascimento</th>
                    <th align="left">Telefone</th>
                    <th align="left">E-mail</th>
                    <th align="left">Endereço</th>
                    <th align="left">Bairro</th>
                    <th align="left">CEP</th>
                    <th align="left">N° casa</th>
                    <th align="left">Complemento</th>
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
                        <input type="text" name="fname"  placeholder="Nome"/><br/>
                        <input type="text" name="lname"  placeholder="Sobrenome"/><br/>
                        <input type="int" name="cpf"  placeholder="CPF"/><br/><br/>
                        <input type="int" name="dateOfBirth"  placeholder="Nascimento"/><br/><br/>
                        <input type="int" name="phone"  placeholder="Telefone"/><br/><br/>
                        <input type="int" name="email"  placeholder="E-mail"/><br/><br/>
                        <input type="int" name="address"  placeholder="Endereço"/><br/><br/>
                        <input type="int" name="street"  placeholder="Bairro"/><br/><br/>
                        <input type="int" name="cep"  placeholder="CEP"/><br/><br/>
                        <input type="int" name="houseNumber"  placeholder="Nº casa"/><br/><br/>
                        <input type="int" name="referencePoint"  placeholder="Complemento"/><br/><br/>
                        <button className='enviar' type='submit'>Enviar</button><br/>
                        <button className='fechar' onClick={() => setOpenModal(false)}>Fechar</button>
                    </form>
                </Box>
            </Box>
        }
        </Content>
      </>
    )
  }

export default Clientes