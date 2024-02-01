import { RememberMe, Edit } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import SearchBar from '../Contatos/components/SearchBar';
import EditOutlined from '@mui/icons-material/EditOutlined';

const LembreteItem = ({ texto, hora, dias }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid gray', paddingBottom: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ flex: 1 }}>
                <strong>{texto}</strong> {/* Texto do lembrete */}
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
                <span>{hora}</span> {/* Hora do lembrete */}
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
                <span>{dias}</span> {/* Dias do lembrete */}
            </div>
            <div style={{ flex: 1, textAlign: 'right', color:'blue' }}>
                <EditOutlined /> {/* Ícone de edição */}
            </div>
        </div>
    );
};

const Lembrete = () => {

    //modal
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="container-home" style={{width: '100%', backgroundColor: 'background.paper', paddingTop: '20px'}}>
                <div className="home" style={{width: '100%',marginLeft:'10px'}}>
                    <div className="container-open-notes" style={{borderBottom: '1px solid gray',width:'100%', marginBottom: '20px'}}>
                        <div className="open-note">
                            <button>Nota B</button> <span>X</span>    
                        </div>
                        <div className="open-note">
                            <button>Boas-vindas da Notiworks!</button> <span>X</span>
                        </div>
                    </div>
                    <div className="header-menu" style={{width: '99%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px'}}>
                        <div className="title" style={{display: 'flex', alignItems: 'center'}}>
                            <RememberMe fontSize="large" htmlColor="lightgray"  /> {/* Ícone de lembrete */}
                            <h1 style={{marginLeft: '10px'}}>Lembrete</h1>
                        </div>
                        <button onClick={handleOpen} className="btn-new-notas" style={{width: '150px'}}>+ Nova Consulta</button>
                    </div>
                    <div style={{width: '50%', marginBottom: '20px'}}>
                         <SearchBar/>
                    </div>
                    <LembreteItem texto="Reunião Diária" hora="8:00" dias="D S T Q Q S S" />
                    <LembreteItem texto="Retirar Encomenda" hora="12:00" dias="D S T Q Q S S" />
                    <LembreteItem texto="Reunião Planejamento" hora="14:30" dias="D S T Q Q S S" />
                    <LembreteItem texto="Enviar documentação" hora="12:00" dias="D S T Q Q S S" />
                    <LembreteItem texto="Entregar Relatório(16:30)" hora="16:00" dias="D S T Q Q S S" />
                </div>
            </div>
        </>
    )
}

export default Lembrete;
