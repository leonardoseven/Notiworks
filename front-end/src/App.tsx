import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import { AuthProvider } from './context/AuthProvider';
import { SnackbarProvider } from 'notistack';
import Login from './components/Login';
import SendEmailPassword from './components/ResetPassword/SendEmailPassword';
import VerificationCode from './components/ResetPassword/VerificationCode';
import ResetPassword from './components/ResetPassword';
import SuccessResetPassword from './components/ResetPassword/SuccessResetPassword';
import Home from './components/Home';
import Editor from './components/Editor';
import Contatos from './components/Contatos';
import Lembretes from './components/Lembretes';
import Ajuda from './components/Ajuda';
import Configuracoes from './components/Configuracoes';
import CreateUser from './components/CreateUser';
import EmailUserValidation from './components/CreateUser/EmailUserValidation';
import Lembrete from './components/Configuracoes/Lembretes/lembretes';
import EditorNotas from './components/Configuracoes/editorNotas/EditorNotas'
import Assinatura from './components/Configuracoes/assinatura/Assinatura'

function App() {
  return (
    <>
      <AuthProvider>
        <SnackbarProvider maxSnack={3} children={<div />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sendemailpassword" element={<SendEmailPassword />} />
            <Route path="/verificationcode" element={<VerificationCode />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/successresetpassword" element={<SuccessResetPassword />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/userEmailValidation" element={<EmailUserValidation />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/lembretes" element={<Lembretes />} />
            <Route path="/ajuda" element={<Ajuda />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/lembrete" element={<Lembrete />} />
            <Route path="/editorNotas" element={<EditorNotas/>} />
            <Route path="/assinatura" element={<Assinatura/>} />
          </Routes>
        </SnackbarProvider>
      </AuthProvider>
    </>
  );
}

export default App;
