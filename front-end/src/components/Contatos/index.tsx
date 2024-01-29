import LeftBar from "../LeftBar/Index";
import './index.css'
import ContatoComponents from "./ContatoComponents";
import ContatoVazio from "./ContatoVazio";
import ModalContato from "./components/ModalContato";
import OpenTabs from "../OpenTabs";




const Contatos = () =>{

    return(
        <>
            <div className="container-contatos">
                <LeftBar activeIcon="contatos"></LeftBar>
               <div className="container-contatos-headers-1">
                    <OpenTabs active={0}/>
                    <div className="container-contatos-headers-2">
                        <ContatoComponents/>
                        <ModalContato/>
                    </div>
                    
               </div>
               
              
            </div>
        </>
    )
}

export default Contatos;