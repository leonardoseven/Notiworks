import './index.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../..//ResetPassword/Header";
import Footer from "../../ResetPassword/Footer";
import axios from 'axios'
import { useSnackbar } from "notistack";


const EmailUserValidation= () =>{

    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar()

    const [codigo, setCodigo] = useState('');




    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const pinCod = localStorage.getItem("form-pin")
        if(pinCod != codigo){
            enqueueSnackbar("Pin inválido",{variant: 'error', anchorOrigin: {
                vertical: "top",
                horizontal: "center",
              }});
        }else{
            axios.post('http://localhost/api/v1/auth/createUser', {
                name : localStorage.getItem("form-name"),
                username: localStorage.getItem("form-username"),
                password: localStorage.getItem("form-password")
              })
              .then(function (response) {
                localStorage.removeItem("form-name");
                localStorage.removeItem("form-username");
                localStorage.removeItem("form-password");
                enqueueSnackbar("Usuário criado com sucesso",{variant: 'success', anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  }});
                navigate('/login')
              })
              .catch(function (error) {
                console.log(error.response.data);
                enqueueSnackbar(error.response.data.erroMsg,{variant: 'error', anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  }});
              }); 

            
            navigate("/userEmailValidation")     

        }
    }


    return <>
            <Header />
            <div className="container-reset-senha">
                <h1>Digite o código de verificação para finalizar seu cadastro</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group-reset-senha">
                        <label>Código</label>
                        <input onChange={(e)=>setCodigo(e.target.value)} type="text" placeholder="código" required></input>
                    </div>
                    <button className='btn-bottom'  type="submit">Enviar</button>
                </form>
                <Link className='btn-bottom' to="/login">Voltar a tela de Login</Link>
            </div>
            <Footer/>
    </>


}

export default EmailUserValidation;