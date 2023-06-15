//Essa pág listará as vendas feitas. Por isso, precisaremos usar o inner join para obter dados da tabela clientes e produtos, pq nessa lista terá a data da venda, o cliente que comprou e o produto comprado.
import Content from "../components/Content"
import Header from "../components/Header"
import MiniDrawer from '../components/MiniDrawer'

const Sales = () => {
    return (
        <>
            <MiniDrawer>
                <Content title='Vendas'>
                    <Header />
                </Content>
            </MiniDrawer>
        </>
    )
}

export default Sales