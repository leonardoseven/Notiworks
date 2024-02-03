import LeftBar from "../LeftBar/Index";
import HomeIcon from "@mui/icons-material/Home";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RecentCard from "./RecentCard";
import Directory from "./Directory";
import Notas from "./Notas";
import { useEffect, useState } from 'react'
import axios from 'axios';
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from '@mui/icons-material/Description';
import './index.css'
import OpenTabs from "../OpenTabs";
import { useSnackbar } from "notistack";
import Directory2 from "./Directory2";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "30%",
    height: "80vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export type ListObject = {
    id : number
    nome: string
    conteudo: string
    dtAtualizacao : string
}


const Home = () =>{

    const { enqueueSnackbar } = useSnackbar();

    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //criar nota
    const [nota, setNota] = useState('')
    const [modalPesquisa, setModalPesquisa] = useState('')

    const [listDirectory, setListDirectory] = useState([])
    const [listNotas, setListNotas] = useState([])

    const [listRecentNotes, setListRecentNotes] = useState<ListObject[]>([])

    //pesquisa
    const [search, setSearch] = useState('')
    const [filter, setfilter] = useState('')

    const listAllDirectory = () =>{
        let config = {
            headers: {
              "Content-Type": "application/json",
              'Authorization':`Bearer ${sessionStorage.getItem("token")}`
              }
            }
        axios.get('http://localhost/api/v1/directory/list-all',config)
        .then((response)=>{
            setListNotas(response.data.listNotas)
            setListDirectory(response.data.listDirectory)
            console.log(response)
        })
        .catch((error)=>{
            alert("error")
        })
    }

    const getListRecentNotes = () =>{
        let config = {
            headers: {
              "Content-Type": "application/json",
              'Authorization':`Bearer ${sessionStorage.getItem("token")}`
              }
            }
        axios.get('http://localhost/api/v1/notas/recents',config)
        .then((response)=>{
            setListRecentNotes(response.data)
        })
        .catch((error)=>{
            alert("error")
        })
    }


    useEffect(()=>{
        listAllDirectory();
        getListRecentNotes();
    },[])

    const salvarNota = (e : any) =>{
        e.preventDefault()
        var directoryId = localStorage.getItem("directory-to-save") != null && localStorage.getItem("directory-to-save") != undefined ? localStorage.getItem("directory-to-save") : "" 
        let config = {
            headers: {
              "Content-Type": "application/json",
              'Authorization':`Bearer ${sessionStorage.getItem("token")}`
              }
            }
        axios.post('http://localhost/api/v1/notas/save', {titulo:nota, directoryName:modalPesquisa, directoryId:directoryId}, config)
        .then((response)=>{
            setNota('');
            setModalPesquisa('');
            setOpen(false);
            listAllDirectory();
            enqueueSnackbar("Nota salva com sucesso",{variant: 'success', anchorOrigin: {
                vertical: "top",
                horizontal: "center",
              }});
              var notas = localStorage.getItem("open-tabs");
              if(notas != null && notas != undefined){
                if(notas.length >= 5){
                    enqueueSnackbar("Plano gratuito são apenas 5 abas apertas",{variant: 'warning', anchorOrigin: {
                        vertical: "top",
                        horizontal: "center",
                      }});
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
            enqueueSnackbar("Ocorreu um erro inesperado ao salvar.",{variant: 'error', anchorOrigin: {
                vertical: "top",
                horizontal: "center",
              }});
              console.log(error)
        })

        localStorage.removeItem("directory-to-save")
    }

   




    return(
        <>
            <div className="container-home">
                <LeftBar activeIcon="home" />
                <div className="home">
                   <OpenTabs active={0}/>
                    <div className="header-menu">
                        <div className="title">
                            <HomeIcon  fontSize="large"/>
                            <h1>Minhas notas</h1>
                        </div>
                        <div className="container-btn-new-notas">
                            <button onClick={handleOpen} className="btn-new-notas">+ Nova Nota</button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                className="modal"
                                >
                                <Box sx={style}>
                                    <div className="modal-btn" >
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Nova nota
                                        </Typography>
                                    </div>
                                    
                                    <hr/>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <div className="container-nova-nota">
                                            <div className="input-nome-da-nota">
                                                <h5>Nome da nota</h5>
                                                <input onChange={(e)=>{setNota(e.target.value)}} type="text"  required  placeholder="Nome da nota"></input>
                                            </div>

                                            <div className="input-pesquisar">
                                                <h3>Salve nota em</h3>
                                                <input onChange={(e)=>{setModalPesquisa(e.target.value)}} type="text" placeholder="Pesquisar"></input>
                                            </div>

                                            <div className="moda-container-directorys">
                                                  <Directory2 search={modalPesquisa} />
                                            </div> 
                                                

                                                
                                        </div>
                                    </Typography>
                                    <div className="container-modal-footer">
                                        <div>
                                            <button onClick={handleClose}>Cancelar</button>
                                            <button onClick={salvarNota}>Criar nota</button>
                                        </div>
                                    </div>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                    <div className="header-menu-filter">
                        <input onChange={(e) =>{setSearch(e.target.value)}} className="pesquisar" placeholder="pesquisar"></input>
                        <input  onChange={(e) =>{setfilter(e.target.value)}}  className="filtrar"placeholder="filtrar"></input>
                    </div>

                    <div className="container-recent-used">
                        <h3>Usadas Recentemente</h3>
                        <div className="container-cards">
                            {listRecentNotes.map(item =>
                                    <>
                                        <RecentCard  data={item.dtAtualizacao} conteudo={item.conteudo}/>
                                    </>
                                )
                            }
                        </div>
                    </div>

                    <div>
                        <div className="container-title">
                            <h4>Nome</h4>
                            <h4>Última alteração</h4>
                        </div>
                        <div className="container-directory-notas">
                            <Directory list={listDirectory} icon={<FolderIcon fontSize="small"/>} filter={filter} search={search} directoryFatherId={-1}/>
                            <Notas list={listNotas} icon={<DescriptionIcon fontSize="small"/>} filter={filter} search={search} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home ;