import HomeIcon from "@mui/icons-material/Home";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react'
import axios from 'axios';
import './index.css'
import { Person } from "@mui/icons-material";
import SearchBar from './SearchBar'; // Certifique-se de importar o componente SearchBar
import Contatos from "./Contatos";
import ContatoVazio from "./ContatoVazio";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "10%",
    height: "80vh",
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ContatoComponents = () =>{

 //modal
 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 //criar nota
 const [nota, setNota] = useState('')

 const salvarNota = (e : any) =>{
     e.preventDefault()

     let config = {
         headers: {
           "Content-Type": "application/json",
           'Authorization':`Bearer ${sessionStorage.getItem("token")}`
           }
         }
     axios.post('http://localhost/api/v1/notas/save', {titulo:nota, directoryName:'', directoryId:''}, config)
     .then((response)=>{
         setNota('');
         setOpen(false);
         alert("salvo")
     })
     .catch((error)=>{
         alert("error")
     })
 }

 return(
     <>
         <div className="container-home" style={{width: '100%', backgroundColor: 'background.paper'}}>
             <div className="home" style={{width: '100%',marginLeft:'10px'}}>
                 <div className="container-open-notes" style={{borderBottom: '1px solid gray',width:'100%'}}>
                     <div className="open-note">
                         <button>Nota B</button> <span>X</span>    
                     </div>
                     <div className="open-note">
                         <button>Boas-vindas da Notiworks! </button> <span>X</span>
                     </div>
                 </div>
                 <div className="header-menu" style={{width: '99%'}}>
                     <div className="title">
                     <Person fontSize="large" htmlColor="lightgray" />
                         <h1>Contatos</h1>
                     </div>
                     <div className="container-btn-new-notas">
                     <button onClick={handleOpen} className="btn-new-notas" style={{width: '150px'}}>+ Nova Consulta</button>

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
                                     Nova Consulta
                                     </Typography>
                                 </div>
                                 
                                 <hr/>
                                 <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                     <div className="container-nova-nota">
                                         <div className="input-nome-da-nota">
                                             <h5>Nome da nota</h5>
                                             <input onChange={(e)=>{setNota(e.target.value)}} type="text"  required  placeholder="Nome da nota"></input>
                                         </div>
                                     </div>
                                 </Typography>
                             </Box>
                         </Modal>
                     </div>
                 </div>
                 <SearchBar /> {}
             <Contatos/>
        
             </div>
         </div>
     </>
 )
}

export default ContatoComponents;
