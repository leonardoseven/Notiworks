import { styled } from '@mui/system';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

const StyledTypography = styled(Typography)({
  fontWeight: 'bold',
});

const InferiorToolbarConfiguration = () => {
  return (
    <div>
<AppBar className="app-bar1" color="default" position='fixed' sx={{ top: 'auto', bottom: 0, borderTop: '1px solid gray'}}>
        <Toolbar>
          <StyledTypography variant="h6">
          </StyledTypography>
          <div style={{ marginLeft: 'auto' }}>
            <Button variant="outlined" size="large" style={{ marginRight: '10px', borderColor: 'gray', width:'212px', color: 'black' }}>
              Cancelar
            </Button>
            <Button variant="contained" color="primary" size="large" style={{ width:'212px' }}>
              Salvar alterações
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default InferiorToolbarConfiguration;
