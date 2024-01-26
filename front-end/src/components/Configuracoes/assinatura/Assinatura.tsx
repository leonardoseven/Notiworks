import InferiorToolbarConfiguration from "../components/InferiorToolbarConfiguration";
import AppBarConfiguration from "../components/appBar";
import LeftBarConfiguration from "../components/leftBarConfiguracao";
import SubscriptionPage from "./SubscriptionPage";


const Assinatura = () => {
    return (
      <div className="container-configuracoes">
        <AppBarConfiguration />
        <InferiorToolbarConfiguration/>
        <LeftBarConfiguration activeIcon="configuracoes" />
        <div className="container-content">
          <h1 className="h1-configuration">
            <SubscriptionPage/>
    
          </h1>
        </div>
      </div>
    );
  };
  
  export default Assinatura;