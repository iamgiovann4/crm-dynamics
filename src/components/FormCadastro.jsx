import { handleSubmit } from '../pages/Cadastro'

const FormCadastro = () => {
    return(
        <>
            <div style={styles.container}>
                <form onSubmit={handleSubmit} >
                    <div style={styles.grupo1}>
                        <input style={styles.nomeSobrenome} type="text" name="fname"  placeholder="Name"/><br/>
                        <input style={styles.nomeSobrenome} type="text" name="lname"  placeholder="Sobrenome"/><br/>
                    </div>
                
                    <input style={styles.inputs} type="text" name="office"  placeholder="Office"/><br/>
                    <input style={styles.inputs} type="text" name="cpf"  placeholder="CPF"/><br/>
                    <input style={styles.inputs} type="password" name="password"  placeholder="Password"/><br/>
                    <input style={styles.inputs} type="email" name="email" id='email'  placeholder="E-mail"/><br/>
                    <br/>
                    <div style={styles.grupo2}>
                        <button style={styles.botao} className='enviar'>Cadastrar</button><br/>
                    </div>
                </form>
            </div>
        </>
    )
}

const styles = {
    container: {
        width: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center" 
    },
    grupo1: {
        display: "flex",
        flexDirection: "row",
        gap:"20px"
    },
    nomeSobrenome:{
        border: "none",
        padding: "10px",
        background: "#FFFFFF",
        boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        height: "px"
    },
    inputs:{
        width: "100%",
        marginBottom:"10px",
        border: "none",
        padding: "10px",
        margin: "20px 0 0 0",

        background: "#FFFFFF",
        boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        height: "px"
    },
    grupo2:{
        display: "flex",
        justifyContent:"center",
        alignItems: "center"
    },
    botao:{
        width: "65%",
        height: "45px",
        border: "0",
        borderRadius: "15px",
        color: "#fff",
        fontSize: "25px",
        fontWeight: "bold",
        textAlign: "center",
        background: "linear-gradient(90deg, #0070C0 0%, rgba(15, 154, 254, 0.7) 100%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        margintop: "20px"
    }
}

export default FormCadastro;