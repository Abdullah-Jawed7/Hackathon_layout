"use server"
import { Outlet } from 'react-router'

function AuthLayout() {

    // check user does not had token in localstorage or cookie
  return (
    <div className='w-full min-w-screen min-h-screen h-full mx-auto p-3  bg-slate-100 dark:bg-slate-700/80 flex items-center justify-center' >
      <Outlet/>
    </div>
  )
}

export default AuthLayout 
