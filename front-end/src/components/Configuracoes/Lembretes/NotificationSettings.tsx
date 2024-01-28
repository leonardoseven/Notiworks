import { Info } from '@mui/icons-material';
import {  Switch } from '@mui/material';
import React from 'react';

const NotificationSettings: React.FC = () => {
  return (
    <div style={{ paddingTop: '30px', paddingLeft: '30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '22px', marginBottom: '4px' }}>Desativar notificações</h2>
        <Switch />
      </div>
      <p style={{ color: 'gray', fontSize: '18px', fontWeight: 'normal', marginBottom: '10px' }}>
        Marcando esta opção, o sistema deixará de disparar notificações durante o intervalo de tempo escolhido no campo abaixo<br /> ou até desmarcá-la.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', color: 'blue', fontSize: '18px' }}>
        <Info />
        <p style={{ fontWeight: 'normal' }}>As notificações voltarão a ser disparadas normalmente após o fim do período informado.</p>
      </div>
      <p style={{ color: 'gray', fontSize: '18px', fontWeight: 'normal', marginBottom: '5px' }}>Duração do periodo:</p>
      <select style={{ width: '300px', height: '45px', color: 'gray', backgroundColor: 'lightgray' }}>
        <option>Selecione uma opção</option>
      </select>
    </div>
  );
};

export default NotificationSettings;
