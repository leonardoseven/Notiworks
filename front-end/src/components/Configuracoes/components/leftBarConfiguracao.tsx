
import React from 'react';
import { Link } from 'react-router-dom';
import './index-configuration.css';

interface IProps {
  activeIcon: string;
}

const LeftBarConfiguration: React.FC<IProps> = ({ activeIcon }) => {
  return (
    <div className='container-left-bar1'>
      <div className='sub-container-left-bar1'>
        <nav>
          <div className={'menu-item1 ' + (activeIcon === 'home' ? 'active' : '')}>
            <Link to='/home' className='label'>
              Perfil
            </Link>
          </div>

          <div className={'menu-item1 ' + (activeIcon === 'editor' ? 'active' : '')}>
            <Link to='/editor' className='label'>
              Lembretes
            </Link>
          </div>

          <div className={'menu-item1 ' + (activeIcon === 'contatos' ? 'active' : '')}>
            <Link to='/contatos' className='label'>
              Editor de Notas
            </Link>
          </div>

          <div className={'menu-item1 ' + (activeIcon === 'lembretes' ? 'active' : '')}>
            <Link to='/lembretes' className='label1'>
              Assinatura
            </Link>
          </div>
        </nav>
        {/* Espaço para mostrar produtos ou outros componentes */}
        <div className="spacer1"></div>
      </div>
    </div>
  );
};

export default LeftBarConfiguration;
