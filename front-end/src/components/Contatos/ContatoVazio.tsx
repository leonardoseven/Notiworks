import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const ContatoVazio = () => {
    return (
        <div className="container-open-notes" style={{borderBottom: '1px solid gray',width:'100%'}}>
        <div style={{ padding: '250px', paddingLeft: '300px', textAlign: 'center', borderLeft: '1px solid gray', marginTop:'27px',height: '360px',borderTop: '1px solid gray'}}>
            <FolderOpenIcon style={{ fontSize: 100, color: 'gray' }} />
            <p style={{fontSize:'20px',width:'320px'}}>Itens compartilhados com esse contato:</p>
            <p>Clique sobre um dos seus contatos ao lado para</p>
        </div>
        </div>
    );
}

export default ContatoVazio;
