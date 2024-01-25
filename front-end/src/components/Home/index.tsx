import LeftBar from "../LeftBar/Index";
import HomeIcon from "@mui/icons-material/Home";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RecentCard from "./RecentCard";
import Directory from "./Directory";
import { useContext, useEffect, useState } from 'react'
import './index.css'
import { AuthContext } from "../../context/AuthProvider";

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


const Home = () =>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
            <div className="container-home">
                <LeftBar activeIcon="home" />
                <div className="home">
                    <div className="container-open-notes">
                        <div className="open-note">
                            <button>Nota B</button> <span>X</span>    
                        </div>
                        <div className="open-note">
                            <button>Boas-vindas da Notiworks! </button> <span>X</span>
                        </div>
                    </div>
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
                                                <input type="text" placeholder="Nome da nota"></input>
                                            </div>

                                            <div className="">
                                                <h3>Salve nota em</h3>
                                                <input type="text" placeholder="Nome da nota"></input>
                                            </div>
                                               
                                                

                                                
                                        </div>
                                    </Typography>
                                    <div className="container-modal-footer">
                                        <div>
                                            <button onClick={handleClose}>Cancelar</button>
                                            <button >Criar nota</button>
                                        </div>
                                    </div>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                    <div className="header-menu-filter">
                        <input className="pesquisar" placeholder="pesquisar"></input>
                        <input className="filtrar"placeholder="filtrar"></input>
                    </div>

                    <div className="container-recent-used">
                        <h3>Usadas Recentemente</h3>
                        <div className="container-cards">
                            <RecentCard />
                            <RecentCard />
                            <RecentCard />
                        </div>
                    </div>

                    <div>
                        <div className="container-title">
                            <h4>Nome</h4>
                            <h4>Última alteração</h4>
                        </div>
                        <div className="container-directorys">
                            <Directory />
                            <Directory />
                            <Directory />
                            <Directory />
                            <Directory />
                            <Directory />
                            <Directory />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home ;