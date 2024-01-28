import './index.css'
import { useNavigate } from 'react-router'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Directory from "../Home/Directory";
import { useEffect, useState } from 'react'
import axios from 'axios';
import FolderIcon from "@mui/icons-material/Folder";
import { useSnackbar } from "notistack";
import Tab from './Tab';


interface IProps {
    active: number
 }

const OpenTabs : React.FC<IProps>= (IProps) =>{

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

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

     //modal
     const [open, setOpen] = useState(false);
     const handleOpen = () => {
        var notas = localStorage.getItem("open-tabs");
        if(notas != null && notas != undefined){
            let array = JSON.parse(notas);
            if(array.length >= 5){
                enqueueSnackbar("Plano gratuito são apenas 5 abas abertas",{variant: 'warning', anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                    }});
            }else
                setOpen(true);
        }else{
            setOpen(true);
        }

     }
     const handleClose = () => setOpen(false);
 
     //criar nota
     const [nota, setNota] = useState('')
     const [modalPesquisa, setModalPesquisa] = useState('')
 

      const [listNotas, setListNotas] = useState([])

      useEffect(()=>{
        var notas = localStorage.getItem("open-tabs");
        if(notas != null && notas != undefined)
            setListNotas(JSON.parse(notas))
      }, [])


    const salvarNota = (e : any) =>{
        e.preventDefault()

        let config = {
            headers: {
              "Content-Type": "application/json",
              'Authorization':`Bearer ${sessionStorage.getItem("token")}`
              }
            }
        axios.post('http://localhost/api/v1/notas/save', {titulo:nota, directoryName:modalPesquisa, directoryId:''}, config)
        .then((response)=>{
            enqueueSnackbar("Nota salva com sucesso.",{variant: 'success', anchorOrigin: {
                vertical: "top",
                horizontal: "center",
              }});
            var notas = localStorage.getItem("open-tabs");
            if(notas != null && notas != undefined){
            let array = JSON.parse(notas);
            if(array.length >= 5){
                console.log("Plano gratuito são apenas 5 abas apertas")
            }else{
                let nota = {id : response.data.id, nome : response.data.titulo}
                notas = array.concat(nota)
                localStorage.setItem("open-tabs", JSON.stringify(notas))
            }
            }else{
                let nota = [{id : response.data.id, nome : response.data.titulo}]                    
                localStorage.setItem("open-tabs", JSON.stringify(nota))
            }
            navigate("/editor", { state:{notaId : response.data.id}})

            window.location.reload()
        })
        .catch((error)=>{
            enqueueSnackbar("Ocorreu um erro inesperado",{variant: 'error', anchorOrigin: {
                vertical: "top",
                horizontal: "center",
                }});
        })
    }

    return(

        <>
            <div>
                <div className="container-open-notes">
                    <Tab active={IProps.active}></Tab>
                    <div className="open-note">
                        <button>Boas-vindas da Notiworks! </button> <span>X</span>
                    </div>
                    <div className="open-note-plus">
                        <button onClick={handleOpen}>+</button>
                    </div>
                </div>
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
                                    <Directory list={[]} icon={<FolderIcon fontSize="small"/>} filter="" search=""/>
                                    <Directory list={[]} icon={<FolderIcon fontSize="small"/>} filter="" search=""/>
                                    <Directory list={[]} icon={<FolderIcon fontSize="small"/>} filter="" search=""/>
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
             
        </>
    )

}

export default OpenTabs;
