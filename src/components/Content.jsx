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
        height:'100%'
    }
}

export default Content