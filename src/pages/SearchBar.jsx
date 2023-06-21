import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import * as React from 'react';
import { Autocomplete } from '@mui/material';
import { Button } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";




export default function SearchBar() {
        const [protudos, setProdutos] = useState([]); {/* Atualiza os dados do Banco */ } 
    
        const loadProdutos = async () => {
            try {
                const response = await fetch('http://localhost:3100/product')
                const data = await response.json()
                setProdutos(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
    
        useEffect(() => {
            loadProdutos()
        }, []) // [] = executa apenas uma vez quando o componente é montados

    return (
        <Container maxWidth="md" sx={{ mt: 10, display: 'flex', direction: 'row' }} >

            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={protudos.map(option => option.name)}
                renderInput={(params) => (
                    <TextField {...params} label="freeSolo" margin="normal" variant="outlined" sx={{ width: '45rem' }} />
                )}
            />
            <Button variant="contained" sx={{ height: '3.5rem', mt: 2 }}><SearchIcon /></Button>

        </Container>
    );
}
