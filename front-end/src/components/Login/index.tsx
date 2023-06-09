import './index.css'

const Login = () =>{
    return(
        <div className="login">
            <div className="container">
                <h1>Notiworks</h1>
                <h3>Login</h3>
                <form>
                    <div className="form-group">
                        <label>Usuário:</label>
                        <input type="email" placeholder='user@email.com'/>
                    </div>
                    <div className="form-group">
                        <label>Senha:</label>
                        <input type="password"/>
                    </div>
                    <p>Esqueci minha senha</p>
                    <button type='submit'>Entrar</button>
                </form>
                <button>Acessar com Google</button>
                <button>Acessar com Microsoft</button>
                <button>Seu primeiro acesso? Crie uma conta!</button>

            </div>
        </div>
    )

}

export default Login