import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const SendEmailPassword = () =>{
    
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        window.location.href="/verificationcode"
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
                        <input type="email" placeholder="exemple@exemple.com"></input>
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