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
import TableFilter from "./pages/TableFilter";

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
                <Route path="/cadastroC" element={<FormCustomers />} />
                <Route path="/add-funcionarios" element={<FormEmployees />} />
                <Route path="/cliente-edit" element={<CustomersEdit />} />
                <Route path="/funcionarios-edit" element={<EmployeesEdit />} />
                <Route path="/testtable" element={<TableFilter />} />
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