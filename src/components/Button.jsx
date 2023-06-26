import React from 'react'

const Button = ({ children }) => {
    return (
        <div style={styles.centralizar}>
            <button style={styles.enviar} className='enviar'>{children}</button><br />
        </div>
    );
}

export default Button

const styles = {
    enviar: {
        height: "45px",
        border: "0",
        borderRadius: "15px",
        color: "#fff",
        fontSize: "25px",
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
        background: "linear-gradient(90deg, #0070C0 0%, rgba(15, 154, 254, 0.7) 100%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        margintop: "20px",
        '&:hover': {
            background: '#252525',
        }
    },
    centralizar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
}