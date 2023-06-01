import Box from '@mui/material/Box'

const Content = ({title, children}) => {

    return (
        <Box >
            <h1>{title}</h1>

            {children}
        </Box>
    )
}

export default Content