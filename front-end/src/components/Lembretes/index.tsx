import LeftBar from "../LeftBar/Index"
import Lembrete from "./Lembrete";
import './index.css'


const Lembretes = () =>{

    

    return(
        <>
            <div className="container-lembretes">
                <LeftBar activeIcon="lembretes"></LeftBar>
                <Lembrete/> 
               
            </div>
        </>
    )

}

export default Lembretes;