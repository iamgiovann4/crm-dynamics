import './Modal.css'

const FormCadastro = () => {
    return(
        <>
            <form className="formCadastro">
                <div className='nomesCadastro'>
                    <input type="text" name="nome"  placeholder="Nome"/><br/>
                    <input type="text" name="sobrenome"  placeholder="Sobrenome"/><br/>
                </div>

                <div className='inputsCadastro'>
                    <input type="email" name="email"  placeholder="E-mail"/><br/>
                    <input type="text" name="cpf"  placeholder="CPF"/><br/>
                    <input type="password" name="senha"  placeholder="Senha"/><br/>
                    <input type="password" name="confirmacaoSenha"  placeholder="Confirmar senha"/><br/>
                    <br/>
                    <button className='enviar'>Cadastrar</button><br/>
                </div>
            </form>
        </>
    )
}

export default FormCadastro;