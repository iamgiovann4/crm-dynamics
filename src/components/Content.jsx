import Box from '@mui/material/Box'

const Content = ({title, children}) => {

    return (
        <Box sx={{height:'100%', padding: 0, margin: 0}} >
            {children}
        </Box>
    )
}

export default Content