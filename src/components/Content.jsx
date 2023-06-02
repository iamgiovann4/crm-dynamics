import Box from '@mui/material/Box'

const Content = ({title, children}) => {

    return (
        <Box sx={{height:'100%', background: "#f1f1f1"}} >
            {children}
        </Box>
    )
}

export default Content