import { useState } from 'react'
import Box from '@mui/material/Box'
import { FaTrash as IconTrash, FaEdit as IconEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
// import '../pages/Produto.css'
// import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
// import TableRow from '@mui/material/TableRow'
// import Paper from '@mui/material/Paper'


const TableClient = ({ client, setClients, clients }) => {

  const navigate = useNavigate()

  // const [modalOpen, setOpenModal] = useState(false)
  // const [fname, setFname] = useState(client.fname)
  // const [lname, setLname] = useState(client.lname)
  // const [cpf, setCpf] = useState(client.cpf)
  // const [dateOfBirth, setDateOfBirth] = useState(client.dateOfBirth)
  // const [phone, setPhone] = useState(client.phone)
  // const [email, setEmail] = useState(client.email)
  // const [address, setAddress] = useState(client.address)
  // const [street, setStreet] = useState(client.street)
  // const [cep, setCep] = useState(client.cep)
  // const [houseNumber, setHouseNumber] = useState(client.houseNumber)
  // const [referencePoint, setReferencePoint] = useState(client.referencePoint)

  // const handleEdit = async (event) => {
  //   event.preventDefault()
  //   const id = parseInt(event.target.id.value)
  //   const fname = event.target.fname.value
  //   const lname = event.target.lname.value
  //   const cpf = event.target.cpf.value
  //   const dateOfBirth = event.target.dateOfBirth.value
  //   const phone = event.target.phone.value
  //   const email = event.target.email.value
  //   const address = event.target.address.value
  //   const street = event.target.street.value
  //   const cep = event.target.cep.value
  //   const houseNumber = event.target.houseNumber.value
  //   const referencePoint = event.target.referencePoint.value
  //   const clientEdited = { id, fname, lname, cpf, dateOfBirth, phone, email, address, street, cep, houseNumber, referencePoint }
  //   try {
  //     const response = await fetch('http://localhost:3100/client',
  //       {
  //         method: 'PUT',
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(clientEdited),
  //       })
  //     const data = await response.json()
  //     if (response.status === 200) {
  //       toast.success('Cliente editado com sucesso!')
  //       const newClients = clients.map((client) => {
  //         if (client.id === id) {
  //           return clientEdited
  //         }
  //         return client
  //       })
  //       setClients(newClients)
  //       // setOpenModal(false)
  //     } else {
  //       alert(data.message)
  //       console.log(data)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const deleteClient = async (id) => {
    try {
      const response = await fetch('http://localhost:3100/client/' + id,
        {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          }
        })
      const data = await response.json()
      console.log(data)
      toast.success('Cliente deletado com sucesso!')
      const newClients = clients.filter((client) => client.id !== id)
      setClients(newClients)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <tr>
        <td style={{ borderBottom: '1px solid #ddd', padding: '15px 23px' }}>{client.fname}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '15px 23px' }}>{client.lname}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '15px 23px' }}>{client.cpf}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '15px 23px' }}>{client.dateOfBirth}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '15px 23px' }}>{client.phone}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '15px 23px' }}>{client.email}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '15px 23px' }}>{client.address}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '15px 23px' }}>{client.street}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '15px 23px' }}>{client.cep}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '15px 23px' }}>{client.houseNumber}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '15px 23px' }}>{client.referencePoint}</td>

        <td style={{ borderBottom: '1px solid #ddd', padding: '15px 23px' }}>
          <IconEdit style={{ width: '20px', cursor: 'pointer' }}
            onClick={() => navigate('/cliente-edit', {state: client})} />
        </td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '15px 23px' }}>
          <IconTrash style={{ height: '20px', cursor: 'pointer', alignItems: 'center', color: 'red' }} onClick={() => deleteClient(client.id)} />
        </td>
      </tr>

      {/* {modalOpen &&
        <Box className='modal' onClick={(event) => {
          if (event.target.className.includes('modal')) {
            setOpenModal(false)
          }
        }}>
          <Box className='container'>
            <div className='xizinho'><p onClick={() => setOpenModal(false)}>X</p></div>
            <h2>Editar Clientes</h2>
            <form onSubmit={handleEdit} className='formModal'>
              <input type="hidden" name="id" value={client.id} />
              <input type="text" name="fname" placeholder="Nome" value={fname} onChange={e => setFname(e.target.value)} /><br />
              <input type="text" name="lname" placeholder="Sobrenome" value={lname} onChange={e => setLname(e.target.value)} /><br />
              <input type="text" name="cpf" placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} /><br /><br />
              <input type="text" name="dateOfBirth" placeholder="Nascimento" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} /><br /><br />
              <input type="text" name="phone" placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} /><br /><br />
              <input type="text" name="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} /><br /><br />
              <input type="text" name="address" placeholder="Endereço" value={address} onChange={e => setAddress(e.target.value)} /><br /><br />
              <input type="text" name="street" placeholder="Bairro" value={street} onChange={e => setStreet(e.target.value)} /><br /><br />
              <input type="text" name="cep" placeholder="CEP" value={cep} onChange={e => setCep(e.target.value)} /><br /><br />
              <input type="text" name="houseNumber" placeholder="N° casa" value={houseNumber} onChange={e => setHouseNumber(e.target.value)} /><br /><br />
              <input type="text" name="referencePoint" placeholder="Complemento" value={referencePoint} onChange={e => setReferencePoint(e.target.value)} /><br /><br />
              <button className='enviar' type='submit'>Editar</button><br />
              <button className='fechar' onClick={() => setOpenModal(false)}>Fechar</button>
            </form>
          </Box>
        </Box>
      } */}
    </>
  )
}

export default TableClient