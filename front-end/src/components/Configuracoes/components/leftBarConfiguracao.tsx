import React from 'react';
import { Link } from 'react-router-dom';
import '../css/index-configuration.css';

interface IProps {
  activeIcon: string;
}

const LeftBarConfiguration: React.FC<IProps> = ({ activeIcon }) => {
  return (
    <div className='container-left-bar1'>
      <div className='sub-container-left-bar1'>
        <nav>
          <div className='menu-item1'>
            <Link to='/configuracoes' className={'label ' + (activeIcon === 'configuracoes' ? 'active' : '')}>
              Perfil
            </Link>
          </div>

          <div className='menu-item1'>
            <Link to='/lembrete' className={'label ' + (activeIcon === 'lembrete' ? 'active' : '')}>
              Lembretes
            </Link>
          </div>

          <div className='menu-item1'>
            <Link to='/contatos' className={'label ' + (activeIcon === 'contatos' ? 'active' : '')}>
              Editor de Notas
            </Link>
          </div>

          <div className='menu-item1'>
            <Link to='/lembretes' className={'label1 ' + (activeIcon === 'lembretes' ? 'active' : '')}>
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
