import InferiorToolbarConfiguration from "../components/InferiorToolbarConfiguration";
import AppBarConfiguration from "../components/appBar";
import LeftBarConfiguration from "../components/leftBarConfiguracao";
import NoteEditor from "./NoteEditor";

const EditorNotas = () => {
    return (
      <div className="container-configuracoes">
        <AppBarConfiguration />
        <InferiorToolbarConfiguration/>
        <LeftBarConfiguration activeIcon="configuracoes" />
        <div className="container-content">
          <h1 className="h1-configuration">
            <NoteEditor/>
          </h1>
        </div>
      </div>
    );
  };
  
  export default EditorNotas;