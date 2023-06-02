import { Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Products from "./pages/Produtos";
import Clientes from "./pages/Clientes";
import Home from "./pages/Home";
import Pag404 from "./pages/404";
import Login from "./pages/Login";
// import Resumo from "./pages/Resumo";
import Landpage from "./pages/Landpage";

import Funcionarios from "./pages/Funcionarios";
import Vendas from "./pages/Vendas";
import CheckLogged from "./components/CheckLogged";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Landpage />} />
            {/* <Route path="/landpage" element={<Landpage/>} /> */}
            <Route element={<CheckLogged />}>
                <Route path="/produtos" element={<Products />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/home" element={<Home />} />
                <Route path="/funcionarios" element={<Funcionarios />} />
                <Route path="/vendas" element={<Vendas />} />
            </Route>

            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/resumo" element={< Resumo />} /> */}
            <Route path="/landpage" element={<Landpage />} />
            <Route path="*" element={<Pag404 />} />
        </Routes>
    )
}

export default Router