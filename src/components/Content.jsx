import Box from '@mui/material/Box'

const Content = ({children}) => {
    return (
        <Box style={styles.conteudo}>
            {children}
        </Box>
    )
}

const styles = {
    conteudo: {
        height:'100%', 
        background: "#f1f1f1"
    }
}

export default Content