import { Box } from "@mui/system"
import Content from "../components/Content"
import MiniDrawer from "../components/MiniDrawer"
import Card from "../components/Card"
import Card2 from "../components/Card2"
import Card3 from "../components/Card3"
import Card4 from "../components/Card4"


const Contact = () => {
    return (
        <>
            <MiniDrawer>
                <Content>
                    <Box sx={{ textAlign: 'center',display:"flex",flexDirection:"column", alignItems:"center" }}>
                        <h1>Contato</h1>
                        <div style={{ display: "flex", alignItems: "center"}}>
                            <Card></Card>
                            <Card2></Card2>
                        </div>
                        <div style={{ display: "flex", alignItems: "center"}}>
                            <Card3></Card3>
                            <Card4></Card4>
                        </div>
                    </Box>
                </Content>
            </MiniDrawer>
        </>
    )
}
export default Contact