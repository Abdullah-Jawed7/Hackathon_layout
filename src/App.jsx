import { Route, Routes } from 'react-router'
import './App.css'
import RegisterForm from './pages/auth/register.jsx'
import LoginForm from './pages/auth/Login.jsx'
import AuthLayout from "./pages/auth/layout.jsx"
import OtpVerification from './pages/auth/otpVerification.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { Bounce, ToastContainer } from 'react-toastify'

function App() {
  // const {theme} = useSelector(state => state?.theme)
  // // theme handler
  // useEffect(()=>{
  //   console.log(theme)  
  //   if (theme === "Light") {   
  //     document.documentElement.classList.remove("dark");
  //   } else {
  //     document.documentElement.classList.add("dark");
  //   }
  // },[theme])


  return (
   <>
   <Routes >

    <Route element={<AuthLayout/>}>
    <Route path='/register' element={<RegisterForm/>}/>
    <Route path='/login' element={<LoginForm/>}/>
    <Route path='/otp' element={<OtpVerification/>}/>
    </Route>

   </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

   </>
  )
}

export default App
