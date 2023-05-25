import { Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Products from "./pages/Produtos";
import Clientes from "./pages/Clientes";
import Home from "./pages/Home";
import Pag404 from "./pages/404";
import Login from "./pages/Login";
import Landpage from "./pages/Landpage";

const Router = () => {
    return (
        <Routes>
            <Route path="/produtos" element={<Products/>} />
            <Route path="/Clientes" element={<Products/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/landpage" element={<Landpage/>} />
            <Route path="*" element={<Pag404/>} />
            
        </Routes>
    )
}

export default Router