import AppBarConfiguration from "./components/appBar";
import LeftBarConfiguration from "./components/leftBarConfiguracao";
import "../Configuracoes/css/index.css";
import InferiorToolbarConfiguration from "./components/InferiorToolbarConfiguration";
import PerfilConfiguration from "./components/perfilConfiguration";

const Configuracoes = () => {
  return (
    <div className="container-configuracoes">
      <AppBarConfiguration />
      <InferiorToolbarConfiguration/>
      <LeftBarConfiguration activeIcon="configuracoes" />
      <div className="container-content">
        <h1 className="h1-configuration">
          <PerfilConfiguration/>
        </h1>
        {/* Adicione outros componentes ou conteúdo aqui */}
      </div>
    </div>
  );
};

export default Configuracoes;
