import React from 'react';
import { Link } from 'react-router-dom';

const pag404 = () => {
    return(
        <>
        <div style={{display:"flex", flexDirection:"column", textAlign:"center"}}>
            <Link to={`/cadastro`} ><h3>/cadastro</h3></Link> 
            <Link to={`/produtos`} ><h3>/produtos</h3></Link> 
            <Link to={`/login`} ><h3>/login</h3></Link> 
            <Link to={`/landpage`} ><h3>/landpage</h3></Link> 
            <Link to={`/funcionarios`} ><h3>/funcionarios</h3></Link> 
            <Link to={`/vendas`} ><h3>/vendas</h3></Link> 
        </div>
        </>
    );
};

export default pag404;