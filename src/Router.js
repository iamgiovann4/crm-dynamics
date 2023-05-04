import { Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Produtos from "./pages/Produtos";

const Router = () => {
    return (
        <Routes>
            <Route path="/produtos" element={<Produtos/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
        </Routes>
    )
}

export default Router