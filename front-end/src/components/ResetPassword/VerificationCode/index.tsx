import Footer from "../Footer";
import Header from "../Header";
import './index.css'
import { useState } from "react";
 import axios from 'axios'
 import { Link,useNavigate } from 'react-router-dom'
 import { useSnackbar } from "notistack";



const VerificationCode = () =>{

    const [pinCode, setPinCode] = useState('');


    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();


    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const pin  = localStorage.getItem('pin');
        if(pin != pinCode){
            enqueueSnackbar("Pin inválido",{variant: 'error', anchorOrigin: {
                vertical: "top",
                horizontal: "center",
            }});     

        }else{
            navigate("/resetpassword")
        }
    }

    const resendPinCode = (e : any) =>{
        e.preventDefault();
        
        axios.get('http://localhost/api/v1/recovery/password/send/pin?email='+localStorage.getItem("emailPinCode"))
        .then(function (response) {
          localStorage.setItem("pin",response.data.pin);
          navigate("/verificationcode")
        })
        .catch(function (error) {
            enqueueSnackbar(error.message,{variant: 'error', anchorOrigin: {
                vertical: "top",
                horizontal: "center",
            }});     
        });

    }

    return (
        <>
            <Header/>
            <div className="container-verification-code">
                <h1>Informe o código de confirmação</h1>
                <br></br>
                <p>Infome no campo abaixo o código de confirmação que
                    foi enviado para usa caixa de e-mail do endereço {localStorage.getItem("emailPinCode")}
                </p>
                <form onSubmit={handleSubmit} className="form form-group-verification-code">
                    <input onChange={(e) => {setPinCode(e.target.value)} } type="number" placeholder="Digite seu código aqui..."></input>
                    <button className='btn-bottom' onClick={resendPinCode}> Não recebeu seu código? Enviar novamente</button>
                    <button className='btn-bottom btn-send' type="submit">Enviar</button>
                </form>
                <Link className='btn-bottom' to="/login">{'< '} Voltar à tela de Login</Link>
            </div>
            <Footer/>
        </>

    )

}

export default VerificationCode;