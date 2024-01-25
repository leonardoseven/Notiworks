import './index.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../ResetPassword/Header";
import Footer from "../ResetPassword/Footer";
import axios from 'axios'
import { useSnackbar } from "notistack";

const CreateUser = () =>{

    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar()

    const [nome, setNome] = useState('');

    const [email, setEmail] = useState('');

    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if(senha != confSenha){
            enqueueSnackbar("Senha não está igual a confirmação de senha",{variant: 'error', anchorOrigin: {
                vertical: "top",
                horizontal: "center",
              }});
        }else{
           
            axios.get('http://localhost/api/v1/auth/send/pin?email='+email)
            .then(function (response) {
              localStorage.setItem("form-pin",response.data.pin);
              localStorage.setItem("form-name",nome);
              localStorage.setItem("form-username",email);
              localStorage.setItem("form-password",senha);
  
              navigate("/userEmailValidation")
              
            })
            .catch(function (error) {
              console.log(error.response.data);
              alert(error.response.data.erroMsg)
              enqueueSnackbar(error.response.data.erroMsg,{variant: 'error', anchorOrigin: {
                  vertical: "top",
                  horizontal: "center",
                }});
            });    

        }        

    
    }

    return <>
        <Header />
            <div className="container-reset-senha">
                <h1>Criar usuário</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group-reset-senha">
                        <label>Nome:</label>
                        <input onChange={(e)=>setNome(e.target.value)} type="text" placeholder="Nome" required></input>

                        <label>E-mail:</label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="exemple@exemple.com" required></input>

                        <label>Senha:</label>
                        <input onChange={(e)=>setSenha(e.target.value)} type="password" required></input>

                        <label>Confirmação de Senha</label>
                        <input onChange={(e)=>setConfSenha(e.target.value)} type="password" required></input>

                    </div>
                    <button className='btn-bottom'  type="submit">Enviar</button>
                </form>
                <Link className='btn-bottom' to="/login">Voltar a tela de Login</Link>
            </div>
            <Footer/>
    </>


}

export default CreateUser;