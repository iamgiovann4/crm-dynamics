import React, { useEffect, useState } from "react";
import Content from "../components/Content";
import MiniDrawer from "../components/MiniDrawer";
import { toast } from "react-toastify";
import { API_SERVER } from "../config";
import {
  Autocomplete,
  TextField,
  Button,
  Modal,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const Sales = () => {
  const [clients, setClients] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedProductsList, setSelectedProductsList] = useState([]);

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
    const nameClient = selectedClient;
    const nameProduct = selectedProduct;
    console.log("Minha função de submit");
    console.log("Selected Client:", nameClient);
    console.log("Selected Product:", nameProduct);
    const sales = { nameClient, nameProduct };

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

    const handleAddProduct = () => {
      if (selectedProduct) {
        const product = products.find((p) => p.name === selectedProduct);
        const selectedProductWithClientId = {
          ...product
        };
        setSelectedProductsList([...selectedProductsList, selectedProductWithClientId]);
        setSelectedProduct("");
      }
    };

    const handleShowArray = async () => {
      const result = {
        clientID: selectedClient.id,
        sales: selectedProductsList
      }

      try {
        const response = await fetch('http://localhost:3100/sales',
          {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(result),
          })
        const data = await response.json()
        console.log(data)
        toast.success('Produto criado com sucesso')
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
                    <Autocomplete
                      id="clientAutoComplete"
                      freeSolo={true}
                      options={clients.map((client) => client.cpf)}
                      onInputChange={(event, value) => {
                        const selectedClient = clients.find((client) => client.cpf === value);
                        setSelectedClient(selectedClient);
                      }}
                      renderInput={(params) => (
                        <div>
                          <TextField
                            {...params}
                            label="CPF"
                            margin="normal"
                            variant="outlined"
                            sx={{ width: "45rem" }}
                          />
                        </div>
                      )}
                    />
                  ) : (
                    <p>Carregando clientes...</p>
                  )}
                </div>

                <div>
                  <label>Produto:</label>
                  {products.length > 0 ? (
                    <div>
                      <select
                        //   value={selectedProduct}
                        onChange={(event) => setSelectedProduct(event.target.value)}
                      >
                        <option value="">Selecione um produto</option>
                        {products.map((product) => (
                          <option key={product.id} value={product.name}>
                            {product.name} - {product.price}
                          </option>
                        ))}
                      </select>
                      <Button variant="contained" onClick={handleAddProduct} sx={{ mt: 2 }}>
                        Adicionar Produto
                      </Button>
                    </div>
                  ) : (
                    <p>Carregando produtos...</p>
                  )}

                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Nome do Produto</TableCell>
                        <TableCell>Preço</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedProductsList.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell>{product.name}</TableCell>
                          <TableCell>{product.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <Button variant="contained" onClick={handleShowArray} sx={{ mt: 2 }}>
                    Mostrar Array
                  </Button>
                </div>

                <Button type="submit" variant="contained">
                  Enviar
                </Button>
              </form>
            </h1>
          </Content>
        </MiniDrawer>
      </>
    );
  };
}

export default Sales;
