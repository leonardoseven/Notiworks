import { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link} from "react-router-dom";
import './index.css'

const SuccessResetPassword = () =>{


    return(
        <>
            <Header/>
            <div className="container-success-reset-senha">
                <CheckCircleIcon></CheckCircleIcon>
                <h1>Senha redefinida com sucesso</h1>
                <Link className='btn-bottom btn-send' to={"/login"}>Fazer login com a nova senha</Link>
            </div>
            <Footer/>
        </>
    )

}


export default SuccessResetPassword;