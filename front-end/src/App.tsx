
import {  Routes, Route } from 'react-router-dom'
import './app.css'


import Login from './components/Login'
import SendEmailPassword from './components/ResetPassword/SendEmailPassword'
import VerificationCode from './components/ResetPassword/VerificationCode'
import ResetPassword from './components/ResetPassword'
import SuccessResetPassword from './components/ResetPassword/SuccessResetPassword'
import Home from './components/Home'
import Editor from './components/Editor'
import Contatos from './components/Contatos'
import Lembretes from './components/Lembretes'
import Ajuda from './components/Ajuda'
import Configuracoes from './components/Configuracoes'


function App() {
  return (
    <>
      <div className="app">
        <Routes>
            <Route path="/" element={<Login/>} ></Route>
            <Route path="/sendemailpassword" element={<SendEmailPassword/>} ></Route>
            <Route path="/verificationcode" element={<VerificationCode/>} ></Route>
            <Route path="/resetpassword" element={<ResetPassword/>} ></Route>
            <Route path="/successresetpassword" element={<SuccessResetPassword/>} ></Route>
            <Route path="/home" element={<Home/>} ></Route>
            <Route path="/editor" element={<Editor/>} ></Route>
            <Route path="/contatos" element={<Contatos/>} ></Route>
            <Route path="/lembretes" element={<Lembretes/>} ></Route>
            <Route path="/ajuda" element={<Ajuda/>} ></Route>
            <Route path="/configuracoes" element={<Configuracoes/>} ></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
