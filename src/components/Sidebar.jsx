import Box from '@mui/material/Box'
import { AiFillHome } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import  { RiDashboardFill } from "react-icons/ri";
import  { FiMoreHorizontal } from "react-icons/fi";
import  { AiFillSetting } from "react-icons/ai";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const Sidebar = () => {
    return (
        <Box sx={{
            background: "#FFFFFF",
            width: 250,
            height: '100%',
            top: '0',
            left: '0',
            margin: '10px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px 1px #00000026'
        }}>

            <Box style={{margin: '30px'}}>
                
                <AiFillHome style={{
                width: 30,
                height: 30,
                fill: 'black', 
                float: 'left',
                padding: '10px'
                }} /> 
                <h3 style={{padding: '14px'}}>Casa</h3>
            </Box>



            <Box style={{margin: '30px'}}>
                
                <RiDashboardFill style={{
                width: 30,
                height: 30, 
                float: 'left',
                padding: '10px'
                }} /> 
                <h3 style={{padding: '14px'}}>Produto</h3>
            </Box>

            <Box style={{margin: '30px'}}>
                
                <RiDashboardFill style={{
                width: 30,
                height: 30,
                fill: 'black', 
                float: 'left',
                padding: '10px'
                }} /> 
                <h3 style={{padding: '14px'}}>Cliente</h3>
            </Box>
            
            <Box style={{margin: '30px'}}>
                
                <RiContactsFill style={{
                width: 30,
                height: 30,
                fill: 'black', 
                float: 'left',
                padding: '10px'
                }} /> 
                <h3 style={{padding: '14px'}}>Contato</h3>
            </Box>

            <Box style={{margin: '30px', marginTop: '400px'}}>
                
                <FiMoreHorizontal style={{
                width: 30,
                height: 30,
                fill: 'black', 
                float: 'left',
                padding: '10px'
                }} /> 
                <h3 style={{padding: '14px'}}>Mais</h3>
            </Box>

            <Box style={{margin: '30px'}}>
                
                <AiFillSetting style={{
                width: 30,
                height: 30,
                fill: 'black', 
                float: 'left',
                padding: '10px'
                }} /> 
                <h3 style={{padding: '14px'}}>Configs</h3>
            </Box>
            
        </Box>
    )
}

export default Sidebar