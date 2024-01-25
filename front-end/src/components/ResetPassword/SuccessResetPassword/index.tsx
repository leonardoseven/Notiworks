import { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const SuccessResetPassword = () =>{

    useEffect(() => {
        setTimeout(()=>{window.location.href="/"},2000)
      }, []);

    return(
        <>
            <Header/>
            <div className="container">
                <h1>Alteração realizada com sucesso</h1>
            </div>
            <Footer/>
        </>
    )

}


export default SuccessResetPassword;