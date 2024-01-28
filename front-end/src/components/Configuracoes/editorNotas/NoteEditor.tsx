import React from 'react';

const NoteEditor: React.FC = () => {
  return (
    <div style={{ paddingTop: '30px', paddingLeft: '30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0px' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '18px' }}>Tema</h2>
        <select style={{ width: '250px', height: '40px', marginRight: '40px' }}>
          <option>Claro</option>
        </select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0px' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '18px' }}>Borda da página</h2>
        <select style={{ width: '250px', height: '40px', marginRight: '40px' }}>
          <option>Exibir</option>
        </select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0px' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '18px' }}>Tamanho da margem (em pixels)</h2>
        <select style={{ width: '250px', height: '40px', marginRight: '40px' }}>
          <option>32</option>
        </select>
      </div>
      <p style={{ color: 'gray', fontSize: '18px', fontWeight: 'normal', marginTop: '-10px' }}>Largura padrão para a borda da página (em pixels)</p>
    </div>
  );
};

export default NoteEditor;
