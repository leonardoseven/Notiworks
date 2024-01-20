import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import './index.css'
import { useState } from "react";
 import axios from 'axios'

const VerificationCode = () =>{

    const [pinCode, setPinCode] = useState('');


    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const pin  = localStorage.getItem('pin');
        if(pin != pinCode){
            alert("Pin inválido")
        }
        window.location.href="/resetpassword"
    }

    const resendPinCode = (e : any) =>{
        e.preventDefault();
        
        axios.get('http://localhost/api/v1/recovery/password/send/pin?email='+localStorage.getItem("emailPinCode"))
        .then(function (response) {
          localStorage.setItem("pin",response.data.pin);
          window.location.href = "/verificationcode";
        })
        .catch(function (error) {
          console.log(error.message);
        });


    }

    return (
        <>
            <Header/>
            <div className="container">
                <h1>Informe o código de confirmação</h1>
                <br></br>
                <p>Infome no campo abaixo o código de confirmação que
                    foi enviado para usa caixa de e-mail do endereço @email
                </p>
                <form onSubmit={handleSubmit} className="form">
                    <input onChange={(e) => {setPinCode(e.target.value)} } type="number" placeholder="Digite seu código aqui..."></input>
                    <button onClick={resendPinCode}> Não recebeu seu código? Enviar novamente</button>
                    <button type="submit">Enviar</button>
                </form>
                <Link to="/">{'<'} Voltar à tela de Login</Link>
            </div>
            <Footer/>
        </>

    )

}

export default VerificationCode;