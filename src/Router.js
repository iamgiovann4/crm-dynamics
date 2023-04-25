import { Routes, Route } from "react-router-dom";
import Produtos from "./pages/Produtos";

const Router = () => {
    return (
        <Routes>
            <Route path="/produtos" element={<Produtos/>} />
        </Routes>
    )
}

export default Router