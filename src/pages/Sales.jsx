import React, { useEffect, useState } from "react";
import Content from "../components/Content";
import MiniDrawer from '../components/MiniDrawer';
import { toast } from "react-toastify";
import { API_SERVER } from "../config";

const Sales = () => {
    const [clients, setClients] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedClient, setSelectedClient] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");

    const loadClients = async () => {
        try {
            const response = await fetch(`${API_SERVER}/client`);
            const data = await response.json();
            setClients(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadClients();
    }, []);

    const loadProducts = async () => {
        try {
            const response = await fetch(`${API_SERVER}/product`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const nameClient = selectedClient
        const nameProduct = selectedProduct
        console.log("Minha função de submit");
        console.log("Selected Client:", nameClient);
        console.log("Selected Product:", nameProduct);
        const sales = { nameClient, nameProduct }

        try {
            const response = await fetch(`${API_SERVER}/sales`,
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(sales),
                })
            const data = await response.json()
            console.log(data)
            toast.success('Sales criado com sucesso')
        } catch (error) {
            toast.error('Aconteceu um imprevisto, tente novamente mais tarde.')
        }

    };

    return (
        <>
            <MiniDrawer>
                <Content title="Vendas">
                    <h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Cliente:</label>
                                {clients.length > 0 ? (
                                    <select
                                        value={selectedClient}
                                        onChange={(event) => setSelectedClient(event.target.value)}
                                    >
                                        <option value="">Selecione um cliente</option>
                                        {clients.map((client) => (
                                            <option key={client.id} value={client.fname}>
                                                {client.fname} - {client.lname}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <p>Carregando clientes...</p>
                                )}
                            </div>

                            <div>
                                <label>Produto:</label>
                                {products.length > 0 ? (
                                    <select
                                        value={selectedProduct}
                                        onChange={(event) => setSelectedProduct(event.target.value)}
                                    >
                                        <option value="">Selecione um produto</option>
                                        {products.map((product) => (
                                            <option key={product.id} value={product.name}>
                                                {product.name} - {product.price}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <p>Carregando produtos...</p>
                                )}
                            </div>

                            <button type="submit">Enviar</button>
                        </form>
                    </h1>
                </Content>
            </MiniDrawer>
        </>
    );
};

export default Sales;
