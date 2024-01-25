import './index.css'

const Footer = () =>{

    const getYear = () =>{
        return <>{new Date().getFullYear()}</>
    }

    return(
        <div className="container-footer">
            <p>Notiworks© {getYear()} - Todos os direitos reservados</p>
        </div>
    )

}

export default Footer;