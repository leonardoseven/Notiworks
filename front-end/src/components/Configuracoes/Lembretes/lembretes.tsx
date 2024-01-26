import InferiorToolbarConfiguration from "../components/InferiorToolbarConfiguration";
import AppBarConfiguration from "../components/appBar";
import LeftBarConfiguration from "../components/leftBarConfiguracao";
import NotificationSettings from "./NotificationSettings";


const Lembrete = () => {
    return (
      <div className="container-configuracoes">
        <AppBarConfiguration />
        <InferiorToolbarConfiguration/>
        <LeftBarConfiguration activeIcon="configuracoes" />
        <div className="container-content">
          <h1 className="h1-configuration">
         <NotificationSettings/>
          </h1>
        </div>
      </div>
    );
  };
  
  export default Lembrete;