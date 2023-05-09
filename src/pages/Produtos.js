// import React from 'react';
// import Modal from '../components/Modal';
// import { useEffect, useState } from 'react'

// function Produtos() {

//     const [users, setProducts] = useState(false); {/* Atualiza os dados do Banco */}
//     const [abrirModal, setAbrirModal] = useState(false); {/* Abrir e fechar o modal */}

//     const AbrirModal = () => {
//       setAbrirModal(true)
//     }

//     const FecharModal = () => {
//       setAbrirModal(false)
//     }

//     const loadProducts = async () => {
//       try {
//         const response = await fetch('http://localhost:3100/produtos')
//         const data = await response.json()
//         setProducts(data)
//         console.log(data)
//       } catch (error) {
//           console.log(error)
//         }
//       }

//     useEffect(() => {
//       loadUsers()
//     }, []) // [] = executa apenas uma vez quando o componente é montados


//     export const handleSubmit = async (event) => {
//       event.preventDefault()
//       console.log('Minha funcao de submit')
//       console.log(event.target)
//       const name = event.target.name.value 
//       const price = event.target.price.value
//       const stock = event.target.stock.value
//       const procuct = {name, price, stock}
//       console.log(procuct)
//       try {
//         const response = await fetch('http://localhost:3100/produtos',
//         {
//           method: 'POST',
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(procuct), 
//         })
//         const data = await response.json()
//         console.log(data)
//         FecharModal()
//         loadUsers()
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     return (
//       <div>
//         <h1>Páginas de Produtos</h1>
//         <button onClick={() => setAbrirModal(true)}>Abrir Modal</button>
//         {abrirModal ? 
//         <Modal onClose = {FecharModal}>
//           <h2>Cadastrar produtos</h2>
//         </Modal> : null}
//       </div>
//     );
//   }

// export default Produtos