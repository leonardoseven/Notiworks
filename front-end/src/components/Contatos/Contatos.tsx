import React from 'react';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
interface IProps {
  id : number
  nome : string
  email : string 
}

const Contatos : React.FC<IProps>= (IProps) =>{
  
  

  return (
    <div style={{ padding: '10px', paddingLeft: '20px'}}>
        <div key={IProps.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
          <Avatar style={{marginRight: '10px' }}>{IProps.nome.charAt(0)}</Avatar>
          <div style={{ flex: 1 }}>
            <b>{IProps.nome}</b>
          </div>
          <div style={{ flex: 1 }}>
            {IProps.email}
          </div>
          <div>
            <MoreVertIcon />
          </div>
        </div>
    </div>
  );
}

export default Contatos;
