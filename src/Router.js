import { Routes, Route } from "react-router-dom";
import Cadastro from "./pages/SignUp";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Pag404 from "./pages/404";
import Login from "./pages/Login";
import Landpage from "./pages/Landpage";
import Employees from "./pages/Employees";
import Sales from "./pages/Sales";
import CheckLogged from "./components/CheckLogged";
import FormCustomers from "./pages/FormCustomers";
import Customers from "./pages/Customers";
import Searchbar from "./pages/SearchBar";
import CustomersEdit from "./pages/CustomersEdit";
import FormEmployees from "./pages/FormEmployees";
import EmployeesEdit from "./pages/EmployeesEdit";
import ListSales from "./pages/ListSales";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Landpage />} />
            <Route element={<CheckLogged />}>
                <Route path="/home" element={<Home />} />
                <Route path="/produtos" element={<Products />} />
                <Route path="/clientes" element={<Customers />} />
                <Route path="/home" element={<Home />} />
                <Route path="/funcionarios" element={<Employees />} />
                <Route path="/vendas" element={<Sales />} />
                <Route path="/listar-vendas" element={<ListSales />} />
                <Route path="/cadastro-cliente" element={<FormCustomers />} />
                <Route path="/cadastro-funcionario" element={<FormEmployees />} />
                <Route path="/editar-cliente" element={<CustomersEdit />} />
                <Route path="/editar-funcionario" element={<EmployeesEdit />} />
            </Route>

            <Route path="/landpage" element={<Landpage />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Pag404 />} />
            <Route path="barra" element={<Searchbar />} />
        </Routes>
    )
}

export default Router