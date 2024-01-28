import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/index-configuration.css';

const LeftBarConfiguration: React.FC = () => {
  const location = useLocation();
  const activeRoute = location.pathname.split('/')[1];

  return (
    <div className='container-left-bar1'>
      <div className='sub-container-left-bar1'>
        <nav>
          <div className='menu-item1'>
            <Link to='/configuracoes' className={'label ' + (activeRoute === 'configuracoes' ? 'active' : '')}>
              Perfil
            </Link>
          </div>

          <div className='menu-item1'>
            <Link to='/lembrete' className={'label ' + (activeRoute === 'lembrete' ? 'active' : '')}>
              Lembretes
            </Link>
          </div>

          <div className='menu-item1'>
            <Link to='/editorNotas' className={'label ' + (activeRoute === 'editorNotas' ? 'active' : '')}>
              Editor de Notas
            </Link>
          </div>

          <div className='menu-item1'>
            <Link to='/assinatura' className={'label1 ' + (activeRoute === 'assinatura' ? 'active' : '')}>
              Assinatura
            </Link>
          </div>
        </nav>
        <div className="spacer1"></div>
      </div>
    </div>
  );
};

export default LeftBarConfiguration;
