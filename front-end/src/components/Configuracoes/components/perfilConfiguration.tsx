import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditOutlined from "@mui/icons-material/EditOutlined";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import React, { useState } from "react";
import '../css/index-configuration.css';
import { DialogActions } from "@mui/material";
import { Button } from "@mui/material";

const PerfilConfiguration = () => {
  const [open, setOpen] = useState({ profile: false, name: false, password: false });

  const handleClickOpen = (type) => {
    setOpen({ ...open, [type]: true });
  };

  const handleClose = (type) => {
    setOpen({ ...open, [type]: false });
  };

  return (
    <div>
      <div className='profile-avatar'>
        <Avatar 
          alt="googlenpm run dev" 
          src="https://i.pinimg.com/originals/1d/4d/69/1d4d69c694c8ba1034c0e9552f457ecf.jpg" 
          sx={{ width: 100, height: 100 }} 
        /> 
        <div style={{ marginLeft: '10px' }}>
          <Typography variant="h6" component="div" color="text.primary">
            Leonardo dos Santos
          </Typography>
          <Typography variant="body1" component="div" color="text.secondary">
            leonardo.dos.santos@example.com 
          </Typography>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px' }}>
        <IconButton size="small" style={{ marginBottom: '10px' }} onClick={() => handleClickOpen('profile')}>
          <EditOutlined color="primary" />
          <Typography variant="body1" component="span" color="text.primary">
            Editar foto de perfil
          </Typography>
        </IconButton>
        <Dialog open={open.profile} onClose={() => handleClose('profile')}>
          <DialogTitle>Editar foto de perfil</DialogTitle>
          <DialogContent>
            <Avatar 
              alt="googlenpm run dev" 
              src="https://i.pinimg.com/originals/1d/4d/69/1d4d69c694c8ba1034c0e9552f457ecf.jpg" 
              sx={{ width: 100, height: 100 }} 
              className='modal-content'
            /> 
            {
              
            }
          </DialogContent>
        <DialogActions>
         <Button 
  variant="contained" 
  style={{ backgroundColor: '#f44336', color: 'white', width: '100px', margin: '10px auto' }} 
  onClick={() => handleClose('password')}
>
  Cancelar
</Button>
<Button 
  variant="contained" 
  style={{ backgroundColor: '#3f51b5', color: 'white', width: '100px', margin: '10px auto' }} 
  onClick={() => handleClose('password')}
>
  Salvar
</Button>

        </DialogActions>
      </Dialog>

      <IconButton size="small" style={{ marginBottom: '10px' }} onClick={() => handleClickOpen('name')}>
        <EditOutlined color="primary" />
        <Typography variant="body1" component="span" color="text.primary">
          Alterar nome
        </Typography>
      </IconButton>
      <Dialog open={open.name} onClose={() => handleClose('name')}>
        <DialogTitle>Alterar nome</DialogTitle>
        <DialogContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField label="Nome" defaultValue="Leonardo dos Santos" className='modal-content' style={{ marginTop:'10px',marginBottom: '10px' }} />
          {/* Conteúdo do modal para alterar nome */}
        </DialogContent>
        <DialogActions>
        <Button 
  variant="contained" 
  style={{ backgroundColor: '#f44336', color: 'white', width: '100px', margin: '10px auto' }} 
  onClick={() => handleClose('password')}
>
  Cancelar
</Button>
<Button 
  variant="contained" 
  style={{ backgroundColor: '#3f51b5', color: 'white', width: '100px', margin: '10px auto' }} 
  onClick={() => handleClose('password')}
>
  Salvar
</Button>

        </DialogActions>
      </Dialog>

      <IconButton size="small" onClick={() => handleClickOpen('password')}>
        <EditOutlined color="primary" />
        <Typography variant="body1" component="span" color="text.primary">
          Alterar Senha
        </Typography>
      </IconButton>
      <Dialog open={open.password} onClose={() => handleClose('password')}>
        <DialogTitle>Alterar Senha</DialogTitle>
        <DialogContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField type="password" label="Senha Anterior" className='modal-content' style={{marginTop:'10px', marginBottom: '10px' }} />
          <TextField type="password" label="Nova Senha" className='modal-content' style={{marginTop:'10px', marginBottom: '10px' }} />
          <TextField type="password" label="Confirmar Nova Senha" className='modal-content' style={{marginTop:'10px', marginBottom: '10px' }} />
          {/* Conteúdo do modal para alterar senha */}
        </DialogContent>
        <DialogActions>
        <Button 
  variant="contained" 
  style={{ backgroundColor: '#f44336', color: 'white', width: '100px', margin: '10px auto' }} 
  onClick={() => handleClose('password')}
>
  Cancelar
</Button>
<Button 
  variant="contained" 
  style={{ backgroundColor: '#3f51b5', color: 'white', width: '100px', margin: '10px auto' }} 
  onClick={() => handleClose('password')}
>
  Salvar
</Button>

        </DialogActions>
      </Dialog>
      </div>
    </div>
  );
};

export default PerfilConfiguration;
