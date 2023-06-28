import Box from '@mui/material/Box'

const Content = ({children}) => {
    return (
        <Box sx={{backgroundColor: '#f1f1f1'}}>
            {children}
        </Box>
    )
}


export default Content