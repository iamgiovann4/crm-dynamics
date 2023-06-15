import { useEffect } from 'react';
import useAuthStore from "../store/authStore"
import { useNavigate, Outlet } from 'react-router-dom';

const CheckLogged = () => {

    const isLogged = useAuthStore((state) => state.isLogged)
    const navigate = useNavigate()

    // console.log('check-logged')
    
    useEffect(() => {


        if (!isLogged) {
            console.log('not logged')
            navigate('/login')
        }
    }, [isLogged])

    return(
        <Outlet />
     )
}


export default  CheckLogged