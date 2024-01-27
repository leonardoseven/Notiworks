import LeftBar from "../LeftBar/Index";
import './index.css'
import ContatoComponents from "./ContatoComponents";
import ContatoVazio from "./ContatoVazio";




const Contatos = () =>{

    return(
        <>
            <div className="container-contatos">
                <LeftBar activeIcon="contatos"></LeftBar>
                <ContatoComponents/>
                <ContatoVazio/>
            </div>
        </>
    )
}

export default Contatos;