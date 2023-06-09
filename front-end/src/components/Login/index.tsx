import Footer from '../ResetPassword/Footer'
import Header from '../ResetPassword/Header'
import './index.css'
import { Link } from 'react-router-dom'

const Login = () =>{
    return(
        <>
            <Header/>      
            <div className="login">
                <div className="container">
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
                        <Link to="/sendemailpassword">Esqueci minha senha</Link>
                        <button type='submit'>Entrar</button>
                    </form>
                    <div className="button-group">
                        <button>Acessar com Google</button>
                        <button>Acessar com Microsoft</button>
                        <button>Seu primeiro acesso? Crie uma conta!</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )

}

export default Login