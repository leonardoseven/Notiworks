import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import axios from 'axios'
import './index.css'
import { useSnackbar } from "notistack";

const SendEmailPassword = () =>{
    
    const { enqueueSnackbar } = useSnackbar();
    const [email, setEmail] = useState('');

    const navigate = useNavigate();


    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        axios.get('http://localhost/api/v1/recovery/password/send/pin?email='+email)
          .then(function (response) {
            localStorage.setItem("pin",response.data.pin);
            localStorage.setItem("emailPinCode",response.data.email);
            navigate("/verificationcode")
            
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

    return(
        <>
            <Header />
            <div className="container-reset-senha">
                <h1>Redifinição de senha</h1>
                <h3>Informe seu e-mail:</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group-reset-senha">
                        <label>E-mail</label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="exemple@exemple.com"></input>
                    </div>
                    <button className='btn-bottom'  type="submit">Enviar código por e-mail</button>
                </form>
                <Link className='btn-bottom' to="/login">Voltar a tela de Login</Link>
            </div>
            <Footer/>
        </>

    )
}

export default SendEmailPassword;