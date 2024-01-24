import AppBarConfiguration from "./components/appBar";
import LeftBarConfiguration from "./components/leftBarConfiguracao";
import "./index.css";

const Configuracoes = () => {
  return (
    <div className="container-configuracoes">
      <AppBarConfiguration />
      <LeftBarConfiguration activeIcon="configuracoes" />
      <div className="container-content">
        <h1 className="h1-configuration">Configurações</h1>
        {/* Adicione outros componentes ou conteúdo aqui */}
      </div>
    </div>
  );
};

export default Configuracoes;
