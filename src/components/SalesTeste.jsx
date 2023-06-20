import { useEffect, useState } from "react";

const Teste = () => {
    const [clients, setClients] = useState(false); {/* Atualiza os dados do Banco */ }

    const loadClients = async () => {
        try {
            const response = await fetch('http://localhost:3100/client')
            const data = await response.json()
            setClients(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadClients()
    }, []) // [] = executa apenas uma vez quando o componente é montados

    return (
        <>
            <h1>
                <div>
                    <form action="">
                        {clients ? (
                        <select>
                            {clients.map(client => (
                                <option key={client.id} value={client.id}>{client.fname} - {client.lname} </option>
                            ))}
                        </select>
                    ) : (
                        <p>Carregando...</p>
                    )}
                    </form>
                    
                </div>
            </h1>
        </>
    )
}

export default Teste