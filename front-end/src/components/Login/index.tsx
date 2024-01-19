import Footer from '../ResetPassword/Footer'
import Header from '../ResetPassword/Header'
import './index.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState,createContext, useContext  } from 'react'

const Login = () =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const salvar = (event : any) =>{
        event.preventDefault()
        axios.post('http://localhost/api/v1/auth/authenticate', {
            email: email,
            password: password
          })
          .then(function (response) {
            setEmail("")
            setPassword("")
            window.location.href = "/home";
          })
          .catch(function (error) {
            console.log(error.response.data);
          });
    }

    return(
        <>
            <Header/>      
            <div className="login">
                <div className="container">
                    <h3>Login</h3>
                    <form  onSubmit={salvar}>
                        <div className="form-group" >
                            <label>Usuário:</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" value={email}  placeholder='user@email.com'/>
                        </div>
                        <div className="form-group">
                            <label>Senha:</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} />
                        </div>
                        <Link to="/sendemailpassword">Esqueci minha senha</Link>
                        <button>Entrar</button>
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