import { RememberMe, Edit, AttachFile, Info, Close } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import SearchBar from '../Contatos/components/SearchBar';
import EditOutlined from '@mui/icons-material/EditOutlined';
import Dialog from '@mui/material/Dialog/Dialog';
import { Button, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AttachFileIcon from '@mui/icons-material/AttachFile';

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

<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" style={{ maxHeight: '100vh' }}>
<DialogTitle style={{ borderBottom: '2px solid gray', marginTop: '20px', marginBottom: '40px', display: 'flex', justifyContent: 'space-between' }}>
    <span>Nova Notificação</span>
    <Close />
</DialogTitle>
    <DialogContent>
        <TextField autoFocus margin="dense" label="Nome" InputLabelProps={{ shrink: true }} fullWidth />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField margin="dense" label="Data" type="date" style={{ flex: 1, marginRight: '10px' }} InputLabelProps={{ shrink: true }} />
            <TextField margin="dense" label="Hora" type="time" style={{ flex: 1 }} InputLabelProps={{ shrink: true }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <FormControlLabel control={<Switch />} label="" />
            <span style={{ marginLeft: '-20px' }}>Lembrete Recorrente</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px',marginLeft:'120px',marginRight:'250px' }}>
            <FormControlLabel control={<Checkbox icon={<span style={{ border: '1px solid', borderRadius: '5px', padding: '10px' }}>D</span>} checkedIcon={<span style={{ border: '1px solid blue', color: 'blue', borderRadius: '5px', padding: '10px' }}>D</span>} />} label={undefined} />
            <FormControlLabel control={<Checkbox icon={<span style={{ border: '1px solid', borderRadius: '5px', padding: '10px' }}>S</span>} checkedIcon={<span style={{ border: '1px solid blue', color: 'blue', borderRadius: '5px', padding: '10px' }}>S</span>} />} label={undefined} />
            <FormControlLabel control={<Checkbox icon={<span style={{ border: '1px solid', borderRadius: '5px', padding: '10px' }}>T</span>} checkedIcon={<span style={{ border: '1px solid blue', color: 'blue', borderRadius: '5px', padding: '10px' }}>T</span>} />} label={undefined} />
            <FormControlLabel control={<Checkbox icon={<span style={{ border: '1px solid', borderRadius: '5px', padding: '10px' }}>Q</span>} checkedIcon={<span style={{ border: '1px solid blue', color: 'blue', borderRadius: '5px', padding: '10px' }}>Q</span>} />} label={undefined} />
            <FormControlLabel control={<Checkbox icon={<span style={{ border: '1px solid', borderRadius: '5px', padding: '10px' }}>Q</span>} checkedIcon={<span style={{ border: '1px solid blue', color: 'blue', borderRadius: '5px', padding: '10px' }}>Q</span>} />} label={undefined} />
            <FormControlLabel control={<Checkbox icon={<span style={{ border: '1px solid', borderRadius: '5px', padding: '10px' }}>S</span>} checkedIcon={<span style={{ border: '1px solid blue', color: 'blue', borderRadius: '5px', padding: '10px' }}>S</span>} />} label={undefined} />
            <FormControlLabel control={<Checkbox icon={<span style={{ border: '1px solid', borderRadius: '5px', padding: '10px' }}>S</span>} checkedIcon={<span style={{ border: '1px solid blue', color: 'blue', borderRadius: '5px', padding: '10px' }}>S</span>} />} label={undefined} />
        </div>
        <div style={{ marginTop: '10px' }}>
            <span>Observação (opcional)</span>
            <TextField margin="dense" label="Algum detalhe que não queira esquecer?" multiline rows={4} variant="outlined" fullWidth />
        </div>
        <div style={{ marginTop: '10px' }}>
            <span>Anexar nota</span>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid gray', borderRadius: '5px', padding: '10px', marginTop: '10px' }}>
                <AttachFileIcon />
                <span style={{ marginLeft: '10px' }}>Anexar nota</span>
            </div>
        </div>
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
            <Info color="primary" />
            <span style={{ marginLeft: '10px', color: 'blue' }}>Anexando uma nota, sua notificação vai acompanhar um link direto para ela</span>
        </div>
        {}
    </DialogContent>
    <DialogActions style={{ borderTop: '2px solid gray' ,marginTop:'60px'}}>
        <Button onClick={handleClose} style={{ color: 'gray', borderColor: 'gray', borderWidth: '1px', borderStyle: 'solid' }}>Cancelar</Button>
        <Button onClick={handleClose} style={{ backgroundColor: 'blue', color: 'white' }}>Criar notificação</Button>
    </DialogActions>
</Dialog>



                </div>
            </div>
        </>
    )
}
export default Lembrete;
