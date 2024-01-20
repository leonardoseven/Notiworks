import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import axios from 'axios'

const SendEmailPassword = () =>{
    
    const [email, setEmail] = useState('');


    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        axios.get('http://localhost/api/v1/recovery/password/send/pin?email='+email)
          .then(function (response) {
            localStorage.setItem("pin",response.data.pin);
            localStorage.setItem("emailPinCode",response.data.email);
            window.location.href = "/verificationcode";
          })
          .catch(function (error) {
            console.log(error.message);
          });
    }

    return(
        <>
            <Header />
            <div className="container">
                <h1>Redifinição de senha</h1>
                <h3>Informe seu e-mail:</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="exemple@exemple.com"></input>
                    </div>
                    <button type="submit">Enviar código por e-mail</button>
                </form>
                <Link to="/">Voltar a tela de Login</Link>
            </div>
            <Footer/>
        </>

    )
}

export default SendEmailPassword;