import LeftBar from "../LeftBar/Index"
import './index.css'


const Editor = () =>{

    return(
        <>
            <div className="container-editor">
                <LeftBar activeIcon="editor"></LeftBar>
                <h1>Editor</h1>
            </div>
        </>
    )
}

export default Editor;