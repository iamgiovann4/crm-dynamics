//Essa pág listará as vendas feitas. Por isso, precisaremos usar o inner join para obter dados da tabela clientes e produtos, pq nessa lista terá a data da venda, o cliente que comprou e o produto comprado.
import Content from "../components/Content"
import Header from "../components/Header"

const Vendas = () => {
    return (
        <>
            <Content title='Vendas'>
                <Header/>
            </Content>
        </>
    )
}

export default Vendas