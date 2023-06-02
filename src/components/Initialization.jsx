import { useState, useEffect } from 'react'
import useAuthStore from '../store/authStore'

const Initialization = () => {

  const [isLoading, setIsLoading] = useState(true)
  const login = useAuthStore(state => state.login)
  const loaded = useAuthStore(state => state.loaded)

  const loadingUserLogged = () => {
    const token = localStorage.getItem('token')
    const userJSON = localStorage.getItem('user')
    if (token && userJSON) {
      const user = JSON.parse(userJSON)
      console.log(token, user)
      login(token, user)
    }
    setIsLoading(false)
    loaded()
    // eslint-disable-next-line
  }

  useEffect(() => {
    console.log('inicializati')
    loadingUserLogged();
  }, [])

  return (
    <>
      {isLoading && (<div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#FFF', zIndex: 9999 }}><h1>Loading...</h1></div>)}
      {/* {!isLoading && (
        <p>{cpf}</p>
      )} */}
    </>
  )
}

export default Initialization