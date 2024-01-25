
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
import { AuthProvider } from './context/AuthProvider'
import { SnackbarProvider } from 'notistack'
import CreateUser from './components/CreateUser'
import EmailUserValidation from './components/CreateUser/EmailUserValidation'
function App() {

  return (
    <>
     <AuthProvider>
      <SnackbarProvider maxSnack={3}>
          <Routes>
              <Route path="/login" element={<Login/>} ></Route>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/home" element={<Home/>} ></Route>
                <Route path="/sendemailpassword" element={<SendEmailPassword/>} ></Route>
                <Route path="/verificationcode" element={<VerificationCode/>} ></Route>
                <Route path="/resetpassword" element={<ResetPassword/>} ></Route>
                <Route path="/successresetpassword" element={<SuccessResetPassword/>} ></Route>
                <Route path="/createuser" element={<CreateUser/>} ></Route>
                <Route path="/userEmailValidation" element={<EmailUserValidation/>} ></Route>
                <Route path="/editor" element={<Editor/>} ></Route>
                <Route path="/contatos" element={<Contatos/>} ></Route>
                <Route path="/lembretes" element={<Lembretes/>} ></Route>
                <Route path="/ajuda" element={<Ajuda/>} ></Route>
                <Route path="/configuracoes" element={<Configuracoes/>} ></Route>
          </Routes>
        </SnackbarProvider>
      </AuthProvider>
        
    </>
  )
}

export default App
