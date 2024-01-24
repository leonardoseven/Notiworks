import { styled } from '@mui/system';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

const StyledTypography = styled(Typography)({
  fontWeight: 'bold',
});

const AppBarConfiguration = () => {
  return (
    <div>
      <AppBar className="app-bar1" color="default" position='fixed'>
        <Toolbar>
          <StyledTypography variant="h6">
            Configurações
          </StyledTypography>
          <IconButton color="inherit" sx={{ marginLeft: 'auto' }}>
            <Close className="close-icon" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarConfiguration;
