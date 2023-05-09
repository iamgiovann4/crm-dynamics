import { handleSubmit } from '../pages/Cadastro'

const FormCadastro = () => {
    return(
        <>
            <div style={styles.container}>
                <form onSubmit={handleSubmit} >
                    <div style={styles.sla}>
                        <input style={styles.bb2} type="text" name="fname"  placeholder="Name"/><br/>
                        <input style={styles.bb2} type="text" name="lname"  placeholder="Sobrenome"/><br/>
                    </div>
                
                    <input style={styles.bb} type="text" name="office"  placeholder="Office"/><br/>
                    <input style={styles.bb} type="text" name="cpf"  placeholder="CPF"/><br/>
                    <input style={styles.bb} type="password" name="password"  placeholder="Password"/><br/>
                    <input style={styles.bb} type="email" name="email" id='email'  placeholder="E-mail"/><br/>
                    <br/>
                    <div style={styles.centralizar}>
                        <button style={styles.enviar} className='enviar'>Cadastrar</button><br/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormCadastro;

const styles = {
    container:{
        width: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center" 
    },
    sla:{
        display: "flex",
        flexDirection: "row",
        gap:"20px"
    },
    bb:{
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
    bb2:{
        border: "none",
        padding: "10px",
        background: "#FFFFFF",
        boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        height: "px"
    },
    enviar:{
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
    },
    centralizar:{
        display: "flex",
        justifyContent:"center",
        alignItems: "center"
    }
}