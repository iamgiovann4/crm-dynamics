import Box from '@mui/material/Box'

const Sidebar = () => {
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