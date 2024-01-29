import { Link , useNavigate} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import './index.css'
import { useState } from "react";
import { useSnackbar } from "notistack";
import axios from 'axios';

const ResetPassword = () =>{

    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(senha != confirmarSenha){
            enqueueSnackbar("Senhas diferentes",{variant: 'error', anchorOrigin: {
                vertical: "top",
                horizontal: "center",
            }});     
        }else{
            axios.post('http://localhost/api/v1/recovery/password/reset', {
                email : localStorage.getItem("emailPinCode"),
                password: senha
              })
              .then(function (response) {            
                navigate('/successresetpassword')
              })
              .catch(function (error) {
                console.log(error.response.data);
                enqueueSnackbar(error.response.data.erroMsg,{variant: 'error', anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  }});
              })

        }
    }

    return(
        <>
            <Header />
            <div className="container-ref-senha">
                <h1>Redifinição de senha</h1>

                <h3 style={{marginRight:"190px", marginBottom:"0px"}}>Sua senha de conter:</h3>
                <ul style={{marginTop:"0px"}}>
                    <li>No mínimp 8 caracteres</li>
                    <li>Ao menos um número</li>
                    <li>Ao menos um caracter especial (Exemplo: @ $ % & * !)</li>
                </ul>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nova senha:</label>
                        <input onChange={(e) =>{setSenha(e.target.value)}}  type="password" ></input>
                    </div>
                    <div className="form-group">
                        <label>Repita sua nova senha:</label>
                        <input onChange={(e) =>{setConfirmarSenha(e.target.value)}} style={{marginBottom:"10px"}} type="password" ></input>
                    </div>
                    <button className="btn-bottom btn-send" type="submit">Confirmar nova senha</button>
                </form>
                <Link className="btn-bottom" to="/">Cancelar</Link>
            </div>
            <Footer/>
        </>

    )

}

export default ResetPassword;