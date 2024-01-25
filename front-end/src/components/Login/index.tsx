import Footer from '../ResetPassword/Footer'
import './index.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

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
            sessionStorage.setItem("token", response.data)
            window.location.href = "/home";
          })
          .catch(function (error) {
            console.log(error.response.data);
          });
    }

    return(
        <>
            <h1 className='title'>Notiworks</h1>
            <div className="login">
                <div className="container">
                    <h3>Login</h3>
                    <form  onSubmit={salvar}>
                        <div className="form-group" >
                            <label className='label' >Usuário:</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" value={email}  placeholder='user@email.com'/>
                        </div>
                        <div className="form-group">
                            <label className='label'>Senha:</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} />
                        </div>
                        <Link to="/sendemailpassword" className='btn-esqueci-senha'>Esqueci minha senha</Link>
                        <div>
                            <button className='btn-entrar btn-margin'>Entrar</button>
                        </div>
                    </form>
                    <div className="button-group">
                        <button className='btn-bottom'>Acessar com Google</button>
                        <button className='btn-bottom'>Acessar com Microsoft</button>
                        <button className='btn-bottom'>Seu primeiro acesso? Crie uma conta!</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )

}

export default Login