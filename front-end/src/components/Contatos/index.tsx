import LeftBar from "../LeftBar/Index";
import './index.css'
import ContatoComponents from "./ContatoComponents";
import ContatoVazio from "./ContatoVazio";
import ModalContato from "./components/ModalContato";




const Contatos = () =>{

    return(
        <>
            <div className="container-contatos">
                <LeftBar activeIcon="contatos"></LeftBar>
                <ContatoComponents/>
                <ModalContato/>
              
            </div>
        </>
    )
}

export default Contatos;