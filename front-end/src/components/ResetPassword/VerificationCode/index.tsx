import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import './index.css'

const VerificationCode = () =>{

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        window.location.href="/resetpassword"
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
                    <input type="number" placeholder="Digite seu código aqui..."></input>
                    <button> Não recebeu seu código? Enviar novamente</button>
                    <button type="submit">Enviar</button>
                </form>
                <Link to="/">{'<'} Voltar à tela de Login</Link>
            </div>
            <Footer/>
        </>

    )

}

export default VerificationCode;