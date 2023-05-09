import { Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Produtos from "./pages/Produtos";
import Home from "./pages/home";
import Pag404 from "./pages/404";

const Router = () => {
    return (
        <Routes>
            <Route path="/produtos" element={<Produtos/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="*" element={<Pag404/>} />
        </Routes>
    )
}

export default Router