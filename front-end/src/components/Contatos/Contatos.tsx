import React from 'react';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Contatos = () => {
    const contatos = [
        { nome: 'Contato 1', email: 'contato1@gmail.com', cor: 'red' },
        { nome: 'Contato 2', email: 'contato2@gmail.com', cor: 'blue' },
        { nome: 'Contato 3', email: 'contato3@gmail.com', cor: 'green' },
        { nome: 'Contato 4', email: 'contato4@gmail.com', cor: 'purple' },
    ];

    return (
        <div style={{ padding: '50px', paddingLeft: '20px'  }}>
        
               {contatos.map((contato, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                    <Avatar style={{ backgroundColor: contato.cor }}>{contato.nome.charAt(0)}</Avatar>
                    <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
                        <div><b>{contato.nome}</b></div>
                        <div style={{ marginLeft: '230px' }}>{contato.email}</div>
                    </div>
                    <div style={{ marginLeft: '230px' }}>
                        <MoreVertIcon />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Contatos;
