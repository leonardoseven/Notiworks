import LeftBar from "../LeftBar/Index";
import './index.css'
const Home = () =>{
    
    return(
        <>
        <div className="container-home">
            <LeftBar activeIcon="home" />
            <h1>Bem vindo</h1>
        </div>
           
        </>
    );
}

export default Home ;