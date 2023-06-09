import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ResetPassword = () =>{

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        window.location.href="/successresetpassword"
    }

    return(
        <>
            <Header />
            <div className="container">
                <h1>Redifinição de senha</h1>

                <h3>Sua senha de conter:</h3>
                <ul>
                    <li>No mínimp 8 caracteres</li>
                    <li>Ao menos um número</li>
                    <li>Ao menos um caracter especial (Exemplo: @ $ % & * !)</li>
                </ul>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nova senha:</label>
                        <input type="password" ></input>
                    </div>
                    <div className="form-group">
                        <label>Repita sua nova senha:</label>
                        <input type="password" ></input>
                    </div>
                    <button type="submit">Confirmar nova senha</button>
                </form>
                <Link to="/">Cancelar</Link>
            </div>
            <Footer/>
        </>

    )

}

export default ResetPassword;