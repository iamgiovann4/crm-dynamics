import Box from '@mui/material/Box'
// import {FaReact as IconReact} from 'react-icons/fa'
import useAuthStore from '../store/authStore'
import { useState } from 'react'

const Sidebar = () => {

    const isLogged = useAuthStore((state) => state.isLogged)
    const nameUserLogged = useAuthStore((state) => state.name)
    const emailUserLogged = useAuthStore((state) => state.email)
    const tokenUserLogged = useAuthStore((state) => state.token)
    const login = useAuthStore((state) => state.login)
    const logout = useAuthStore((state) => state.logout)

    const [modalOpen, setModalOpen] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault() 
        const email = event.target.email.value
        const pass = event.target.pass.value
        const user = {email, pass}
        try {
          const response = await fetch('http://localhost:3100/auth/login',
          {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user), 
          })
          const data = await response.json()

          console.log(data)
          if(response.status === 200) {
            //logar
            login(data.token, data.user)
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            setModalOpen(false)
          } else{
            alert(data.message)
          }
        } catch (error) {
          console.log(error)
        }
      }

      const handleLogout = async () => {
        try {
          const response = await fetch('http://localhost:3100/auth/logout',
          {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: emailUserLogged, token: tokenUserLogged}), 
          })
          const data = await response.json()
          console.log(data)
          if(response.status === 200) {
            logout()
            localStorage.removeItem('token')
            localStorage.removeItem('user')
          } else{
            alert(data.message)
          }
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <Box sx={{
            position: 'fixed',
            background: "#FFFFFF",
            width: 250,
            height: '100%',
            top: '0',
            left: '0',
            padding: '15px',
            boxShadow: '0px 0px 10px 1px #00000026'
        }}>
             <div style={{margin: '0 0 0 20px', color: '#FFF' }}>
                {isLogged ? (
                    <p onClick={() => handleLogout()}>{nameUserLogged}</p>
                    // <img onClick={() => handleLogout()} style={styles.avatar} src={avatarUserLogged} alt={nameUserLogged} />
                ) : (<button onClick={() => setModalOpen(true)}>Logar</button>) }
            </div>
            {modalOpen && 
              <Box className="bgModal" onClick={(event) => {
                if(event.target.className.includes('bgModal')) {
                  setModalOpen(false)
                }
              }} sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: '#000000A0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9
                }}>
                  <Box sx={{
                    width: '500px',
                    height: '300px',
                    background: '#FFF',
                    borderRadius: '10px',
                    padding: '20px',
                  }}>
                    <h1>Logar</h1>
                    <form onSubmit={handleSubmit}>
                      <input type="text" name="email" placeholder="Email" /><br />
                      <input type="password" name="pass" placeholder="Senha" /><br />
                      <br />
                      <button type="submit">Logar</button>
                    </form>
                  </Box> 
              </Box>
}
            <h2>Dynamics</h2>
            <h2>Home</h2>
            <h2>Contact</h2>
            <h2>More</h2>
            <h2>Product Page</h2>
            <h2>About</h2>
        </Box>
    )
}

export default Sidebar