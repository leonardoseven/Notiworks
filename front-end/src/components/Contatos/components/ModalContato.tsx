import React from 'react';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import FileIcon from '@mui/icons-material/InsertDriveFile'; // Importe o ícone de arquivo
import SearchBar from './SearchBar';
import { More, MoreHorizOutlined, MoreOutlined, MoreVertOutlined } from '@mui/icons-material';

const ModalContato = () => {
  const sharedItems = [
    { name: 'Pasta compartilhada', role: 'Editor', date: '22/02/2023', icon: <FolderIcon /> },
    { name: 'Nota compartilhada', role: 'Leitor', date: '22/02/2023', icon: <FileIcon /> }, // Adicione o novo item aqui
  ];

  const contato = { nome: 'Contato 2', email: 'contato2@gmail.com', color: 'blue' };

  return (
    <div className="container-open-notes" style={{borderBottom: '1px solid gray',width:'100%', borderRadius: '15px'}}>
      <div style={{ padding: '40px', textAlign: 'center', borderLeft: '1px solid gray', marginTop:'27px',height: '800px',borderTop: '1px solid gray'}}>
        <div style={{ display: 'flex', textAlign:'start', marginBottom: '5px' }}>
          <Avatar style={{width:'75px',height:'75px',marginLeft:'30px', backgroundColor: contato.color}}>{contato.nome.charAt(0)}</Avatar>
          <div style={{ marginLeft: '15px', marginTop:'15px' }}>
            <b>{contato.nome}</b>
            <div>{contato.email}</div>
          </div>
        </div>
        <p style={{fontSize:'18px',width:'400px', marginLeft:'-20px'}}><b>Itens compartilhados com esse contato:</b></p>
        <SearchBar />
        <p style={{fontSize:'18px',width:'100px',marginTop:'20px', marginBottom:'-20px', marginLeft:'4px'}}><b>Nome</b></p>
        <div style={{ border: '2px solid gray', padding: '14px', borderRadius: '5px', width: '500px', margin:'30px'}}>
          {sharedItems.map((item, index) => (
            <div key={index}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {item.icon}
                  <b style={{ marginLeft: '70px' }}>{item.name}</b>
                </div>
                <div style={{ marginRight: '0px' }}>{item.role}</div>
                <div style={{ color: 'gray' }}>{item.date}</div> {}
                <MoreVertOutlined/>
              </div>
              {index < sharedItems.length - 1 && <hr />} {}
    
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalContato;
