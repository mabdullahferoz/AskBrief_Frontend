import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Workarea from './components/Workarea'
import { ToastContainer } from 'react-toastify'

const App = () => {

  const [user, setUser] = useState({
    username: "username",
    email: "user@example.com"
  })

  return (
    <div className='hero flex w-screen h-screen overflow-clip bg-[#f8fafc]'>
      <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover theme='light' className={"text-sm"}/>
      <Sidebar user={user}/>
      <Workarea setUser = {setUser}/>
    </div>
  )
}

export default App
