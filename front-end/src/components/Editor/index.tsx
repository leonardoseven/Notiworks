import LeftBar from "../LeftBar/Index"
import './index.css'
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useSnackbar } from "notistack";
import '@mdxeditor/editor/style.css'

// importing the editor and the plugin from their full paths
import { MDXEditorMethods,MDXEditor, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, imagePlugin,linkDialogPlugin,diffSourcePlugin,frontmatterPlugin,tablePlugin,
    UndoRedo, BoldItalicUnderlineToggles,BlockTypeSelect, toolbarPlugin,InsertImage,CodeToggle,CreateLink,DiffSourceToggleWrapper,InsertFrontmatter,InsertTable,InsertThematicBreak,ListsToggle, markdown$ } from '@mdxeditor/editor'
import OpenTabs from "../OpenTabs";



const Editor = () =>{

    const location = useLocation();
    const { enqueueSnackbar } = useSnackbar();

    const [markdownValue, setMarkdownValue] = useState(''); 

    const [title, setTitle] = useState(''); 
    // get userId
    let notaId = location.state.notaId

    const getConteudoNota = () =>{
        let config = {
            headers: {
              "Content-Type": "application/json",
              'Authorization':`Bearer ${sessionStorage.getItem("token")}`
              }
            }
        axios.get('http://localhost/api/v1/notas/'+notaId,config)
        .then((response)=>{
            if(response.data?.conteudo != null){
               console.log(ref.current?.getMarkdown())
               ref.current?.setMarkdown(response.data?.conteudo.replace("\\", ""))
               
            }
            setTitle(response.data?.nome)


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

      document.onkeydown = (e) => {
        if (e.ctrlKey && e.key === 's') {
          e.preventDefault();
          let config = {
            headers: {
              "Content-Type": "application/json",
              'Authorization':`Bearer ${sessionStorage.getItem("token")}`
              }
            }

            axios.post('http://localhost/api/v1/notas/save/'+notaId,{ conteudo : markdownValue},config)
            .then((response)=>{
                console.log(response)
                enqueueSnackbar("Nota salva com sucesso",{variant: 'success', anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                }});
                var notas = localStorage.getItem("open-tabs");
                if(notas != null && notas != undefined){
                  if(notas.length >= 5){
                    console.log("Plano gratuito são apenas 5 abas apertas")

                  }else{
                      let nota = {id : response.data.id, nome : response.data.titulo}
                      notas.concat(JSON.stringify(nota))
                      localStorage.setItem("open-tabs", notas)
                  }
                }else{
                      let nota = [{id : response.data.id, nome : response.data.titulo}]                    
                      localStorage.setItem("open-tabs", JSON.stringify(nota))
                }
  
            })
            .catch((error)=>{
                alert("error")
            })
        }
      }

    useEffect(()=>{
        getConteudoNota();
    },[])

    const ref = useRef<MDXEditorMethods>(null)

 
    return(
        <>
            <div className="container-editor">
                <LeftBar activeIcon="editor"></LeftBar>
                
                <div className="container-editor-text">
                    <OpenTabs active={location.state.notaId}/>
                    <div>
                        <h1 className="container-editor-title">{title}</h1>
                    </div>
                    <MDXEditor
                        ref={ref}
                        markdown={markdownValue}
                        onChange={setMarkdownValue}
                        onError={console.log}
                        plugins={[ headingsPlugin(), listsPlugin(), quotePlugin(), thematicBreakPlugin(),imagePlugin({ imageUploadHandler }),linkDialogPlugin(),diffSourcePlugin(),frontmatterPlugin(),tablePlugin(),
                            toolbarPlugin({
                            toolbarContents: () => (
                                <>
                                {}
                                <UndoRedo />
                                <BoldItalicUnderlineToggles />
                                <BlockTypeSelect/>
                                <CreateLink/>
                                <ListsToggle/>
                                <InsertImage/>
                                <InsertTable/>
                                <CodeToggle/>
                                <DiffSourceToggleWrapper children/>
                                <InsertFrontmatter/>
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