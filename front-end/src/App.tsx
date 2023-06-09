
import {  Routes, Route } from 'react-router-dom'

import Login from './components/Login'
import SendEmailPassword from './components/ResetPassword/SendEmailPassword'
import VerificationCode from './components/ResetPassword/VerificationCode'
import ResetPassword from './components/ResetPassword'
import SuccessResetPassword from './components/ResetPassword/SuccessResetPassword'


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
        </Routes>
      </div>
    </>
  )
}

export default App
