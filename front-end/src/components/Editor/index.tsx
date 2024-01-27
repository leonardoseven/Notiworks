import LeftBar from "../LeftBar/Index"
import './index.css'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios';
import '@mdxeditor/editor/style.css'

// importing the editor and the plugin from their full paths
import { MDXEditor, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, imagePlugin,linkDialogPlugin,diffSourcePlugin,frontmatterPlugin,tablePlugin,
    UndoRedo, BoldItalicUnderlineToggles,BlockTypeSelect, toolbarPlugin,InsertImage,CodeToggle,CreateLink,DiffSourceToggleWrapper,InsertFrontmatter,InsertTable,InsertThematicBreak,ListsToggle } from '@mdxeditor/editor'



const Editor = () =>{

    const location = useLocation();

    const [markdownValue, setMarkdownValue] = useState(''); 
    // get userId
    let notaId = location.state.notaId


    const getConteudoNota = () =>{
        let config = {
            headers: {
              "Content-Type": "application/json",
              'Authorization':`Bearer ${sessionStorage.getItem("token")}`
              }
            }
        axios.get('http://localhost/api/v1/nota/'+notaId,config)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            alert("error")
        })
    }

    async function imageUploadHandler(image: File) {
        const formData = new FormData()
        formData.append('image', image)
        const response = await fetch('http://localhost/upload/images', {
          method: 'POST',
          body: formData
        })
        const blob = (await response.blob())
        const imageUrl = URL.createObjectURL(blob);
        return imageUrl
      }


    useEffect(()=>{
        getConteudoNota();
    },[])

    
    return(
        <>
            <div className="container-editor">
                <LeftBar activeIcon="editor"></LeftBar>
                <div className="container-editor-text">
                <MDXEditor
                    markdown=""
                    onChange={setMarkdownValue}
                    plugins={[ headingsPlugin(), listsPlugin(), quotePlugin(), thematicBreakPlugin(),imagePlugin({ imageUploadHandler }),linkDialogPlugin(),diffSourcePlugin(),frontmatterPlugin(),tablePlugin(),
                        toolbarPlugin({
                        toolbarContents: () => (
                            <>
                            {' '}
                            <UndoRedo />
                            <BoldItalicUnderlineToggles />
                            <BlockTypeSelect/>
                            <CreateLink/>
                            <ListsToggle/>
                            <InsertImage/>
                            <InsertTable/>
                            <CodeToggle/>
                            <DiffSourceToggleWrapper children/>
                            <InsertThematicBreak/>
                            </>
                        )
                        })
                    ]}
                />
                </div>
                
            </div>
        </>
    )
}

export default Editor;