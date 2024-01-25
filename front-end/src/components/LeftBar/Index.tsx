import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PersonIcon from '@mui/icons-material/Person';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'
import './index.css'
import { Box, Button } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { AuthContext, handleLogout } from '../../context/AuthProvider';
import { useContext } from 'react';
interface IProps {
    activeIcon: string
 }

const LeftBar : React.FC<IProps>= ({activeIcon}) =>{

    const {userAuthenticated} = useContext(AuthContext);

    return(
        <>
            <div className='container-left-bar'>
                <div className='sub-container-left-bar'>
                    <div className='profile-avatar'>
                        <Avatar className="avatar-left-bar" alt="googlenpm run dev" src="https://i.pinimg.com/originals/1d/4d/69/1d4d69c694c8ba1034c0e9552f457ecf.jpg" /> 
                        <span>{userAuthenticated.name}</span>
                    </div>

                    <nav>
                        <div className={'menu-item '+(activeIcon === "home" ? 'active':"")}>
                            <Link to="/home">
                                <HomeIcon  />   
                            </Link>
                            <Link to="/home" className='label'>Home</Link>
                            
                            
                        </div>

                        <div className={'menu-item '+(activeIcon === "editor" ? 'active':"")}>
                            <Link to="/editor">
                                <EditNoteIcon />   
                            </Link>
                            <Link to="/editor" className='label'>Editor</Link>
                            
                        </div>

                        <div className={'menu-item '+(activeIcon === "contatos" ? 'active':"")}>
                            <Link to="/contatos">
                                <PersonIcon />   
                            </Link>
                            <Link to="/contatos" className='label'>Contatos</Link>
                        </div>

                        <div className={'menu-item '+(activeIcon === "lembretes" ? 'active':"")}>
                            <Link to="/lembretes">
                                <EventNoteIcon />   
                            </Link>
                            <Link to="/lembretes" className='label'>Lembretes</Link>
                        </div>
                    </nav>
                    <div className='menu-footer'>
                        <div>
                            <div className={'menu-item '+(activeIcon === "ajuda" ? 'active':"")}>
                                <Link to="/ajuda">
                                    <HelpOutlineIcon />   
                                </Link>
                                <Link to="/ajuda" className='label'>Ajuda</Link>
                            </div>
                            <div className={'menu-item '+(activeIcon === "configuracoes" ? 'active':"")}>
                                 <Link to="/configuracoes">
                                    <SettingsIcon />   
                                </Link>
                                <Link to="/configuracoes" className='label'>Configurações</Link>
                            </div>
                        </div>
                    </div>
                    <Box>
                            
                            <Button 
                                variant={'contained'}
                                startIcon={<Logout/>}
                                onClick={()=>handleLogout()}
                            >
                                Logout
                            </Button>
                        </Box>

                </div>
                
            </div>
            
        </>
    );

};

export default LeftBar;