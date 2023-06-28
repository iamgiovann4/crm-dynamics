import React, { useEffect, useState } from "react";
import Content from "../components/Content";
import MiniDrawer from "../components/MiniDrawer";
import { toast } from "react-toastify";
import { API_SERVER } from "../config";
import {
  Autocomplete,
  TextField,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const Sales = () => {
  const [clients, setClients] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedProductsList, setSelectedProductsList] = useState([]);

  const [totalValue, setTotalValue] = useState(0);

  const [selectedProductValue, setSelectedProductValue] = useState('');

  const navigate = useNavigate()

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
  }

  const handleAddProduct = () => {
    if (selectedProduct) {
      const product = products.find((p) => p.name === selectedProduct);

      // Remover os caracteres não numéricos do preço
      const priceString = product.price.replace(/[^\d.,]/g, "");
      const price = parseFloat(priceString.replace(",", "."));

      const selectedProductWithClientId = {
        ...product,
        qtd: selectedProductValue,
        value: price * selectedProductValue, // Calcular o valor total corretamente
      };
      setSelectedProductsList([...selectedProductsList, selectedProductWithClientId]);
      setSelectedProduct("");
      setSelectedProductValue("");

      const productValue = price * selectedProductValue; // Calcular o valor total corretamente
      setTotalValue(totalValue + productValue);
    }
  };


  const handleShowArray = async () => {
    const result = {
      clientID: selectedClient.id,
      sales: selectedProductsList,
      totalValue: totalValue, // Incluir o valor total no objeto result
    }

    console.log(result);

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
      navigate('/listar-vendas')
    } catch (error) {
      toast.error('Aconteceu um imprevisto, tente novamente mais tarde.')
    }

  };

  return (
    <>
      <MiniDrawer>
        <Content title="Vendas">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '900px', borderRadius: '10px', width: '50%', backgroundColor: 'tranparent', margin: '0 auto', }}>

            <form onSubmit={handleSubmit} style={{ width: '100%', backgroundColor: 'white', boxShadow: ' 0px 0px 10px 1px rgba(0, 0, 0, 0.15)', padding: '30px', borderRadius: '20px' }}>
              <h1 style={{ textAlign: 'center' }}>Cadastrar vendas</h1>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '500px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <label style={{ fontSize: '20px' }}>Cliente:</label>
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
                            sx={{ width: "20rem" }}
                          />
                        </div>
                      )}
                    />
                  ) : (
                    <p>Carregando clientes...</p>
                  )}
                </div>

                <div>
                  
                  {products.length > 0 ? (
                    <>
                    
                      <div style={{ display: 'flex', alignItems: 'center', gap:'20px'}}>
                        <label style={{ fontSize: '20px' }}>Produto:</label>
                        <select style={{height: '55px', color: 'gray', font: 'inherit', paddingLeft: '10px', border: '1px solid #9c9c9cb2', borderRadius: '5px'}}
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
                        <TextField
                          type="number"
                          label="Quantidade"
                          value={selectedProductValue}
                          onChange={(event) => setSelectedProductValue(Number(event.target.value))}
                          variant="outlined"
                          margin="normal"
                          sx={{ width: "30%" }}
                        />
                      </div>
                      <div style={{  display: 'flex', justifyContent: 'end', marginBottom: '30px'}}>
                        <Button variant="contained" onClick={handleAddProduct} sx={{ mt: 2, ml: 2 }}>
                          Adicionar
                        </Button>
                      </div>
                    </>
                  ) : (
                    <p>Carregando produtos...</p>
                  )}

                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>Nome do Produto</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Preço</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedProductsList.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell>{product.name}</TableCell>
                          <TableCell>{product.price}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell colSpan={2} align="right" sx={{ fontWeight: 'bold' }}>Total: {totalValue}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                  <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <Button variant="contained" onClick={handleShowArray} sx={{ mt: 2 }} >
                      Enviar
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Content>
      </MiniDrawer>
    </>
  );
};


export default Sales;
