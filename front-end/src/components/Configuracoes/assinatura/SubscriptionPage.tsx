import React, { useState } from 'react';

const SubscriptionPage: React.FC = () => {
  const [isPremium, setIsPremium] = useState(false);

  const handleButtonClick = () => {
    setIsPremium(!isPremium);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', height: '500px', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px gray', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontWeight: 'bold', fontSize: '50px', color: isPremium ? 'blue' : 'gray', textAlign: 'left' }}>{isPremium ? 'Premium' : 'Padrão'}</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '14px' }}>Armazenamento:</p>
            <p style={{ fontSize: '14px' }}>{isPremium ? '6GB' : '2GB'}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <p style={{ fontSize: '14px' }}>Pastas no gerenciador:</p>
            <p style={{ fontSize: '14px' }}>{isPremium ? 'ilimitado' : 'max 3'}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <p style={{ fontSize: '14px' }}>Guias abertas no editor:</p>
            <p style={{ fontSize: '14px' }}>{isPremium ? 'ilimitado' : 'max 3'}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <p style={{ fontSize: '14px' }}>Notificações recorrentes:</p>
            <p style={{ fontSize: '14px' }}>{isPremium ? 'ilimitado' : 'max 5'}</p>
          </div>
        </div>
        {!isPremium ? (
          <button onClick={handleButtonClick} style={{ width: '300px', height: '60px', backgroundColor: 'blue', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Mudar para o Premium</button>
        ) : (
          <button onClick={handleButtonClick} style={{ width: '300px', height: '60px', backgroundColor: 'white', color: 'gray', borderRadius: '5px', border: '1px solid gray', cursor: 'pointer' }}>Retornar para o Plano Básico</button>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPage;
