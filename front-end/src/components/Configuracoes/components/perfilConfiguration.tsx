import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditOutlined from "@mui/icons-material/EditOutlined";

const PerfilConfiguration = () => {
  return (
    <div>
      <div className='profile-avatar' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', margin: '30px 0 0 20px' }}>
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
        <IconButton size="small" style={{ marginBottom: '10px' }}>
          <EditOutlined color="primary" />
          <Typography variant="body1" component="span" color="text.primary">
            Editar foto de perfil
          </Typography>
        </IconButton>
        <IconButton size="small" style={{ marginBottom: '10px' }}>
          <EditOutlined color="primary" />
          <Typography variant="body1" component="span" color="text.primary">
            Alterar nome
          </Typography>
        </IconButton>
        <IconButton size="small">
          <EditOutlined color="primary" />
          <Typography variant="body1" component="span" color="text.primary">
            Alterar Senha
          </Typography>
        </IconButton>
      </div>
    </div>
  );
};

export default PerfilConfiguration;
