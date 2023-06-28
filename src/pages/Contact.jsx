import { Box } from "@mui/system"
import Content from "../components/Content"
import MiniDrawer from "../components/MiniDrawer"

const Contact = () => {
    return(
        <>
            <MiniDrawer>
                <Content>
                    <Box sx={{textAlign: 'center'}}>
                        <h1>Contato</h1>
                    </Box>
                </Content>
            </MiniDrawer>
        </>
    )
}
export default Contact