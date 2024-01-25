
const Footer = () =>{

    const getYear = () =>{
        return <>{new Date().getFullYear()}</>
    }

    return(
        <div className="container">
            <p>Notiworks© {getYear()} - Todos os direitos reservados</p>
        </div>
    )

}

export default Footer;