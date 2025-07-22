import { Route, Routes } from 'react-router'
import './App.css'
import RegisterForm from './pages/auth/register.jsx'
import LoginForm from './pages/auth/Login.jsx'
import AuthLayout from "./pages/auth/layout.jsx"
import OtpVerification from './pages/auth/otpVerification.jsx'
import ForgotPasswordForm from './pages/auth/forget.jsx'

function App() {


  return (
   <>
   <Routes >
    <Route element={<AuthLayout/>}>
    <Route path='/register' element={<RegisterForm/>}/>
    <Route path='/login' element={<LoginForm/>}/>
    <Route path='/forgot' element={<ForgotPasswordForm/>}/>
    <Route path='/otp' element={<OtpVerification/>}/>
    </Route>
   </Routes>

   </>
  )
}

export default App
