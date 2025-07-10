import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Workarea from './components/Workarea'
import { ToastContainer } from 'react-toastify'

const App = () => {

  const [user, setUser] = useState({
    username: "username",
    email: "user@example.com"
  })

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUser(JSON.parse(sessionStorage.getItem("user")))
      console.log("User data loaded from session storage:", JSON.parse(sessionStorage.getItem("user")))
    }
  },)
  

  return (
    <div className='hero flex w-screen h-screen overflow-clip bg-[#f8fafc]'>
      <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover theme='light' className={"text-sm"}/>
      <Sidebar user={user}/>
      <Workarea user = {user}/>
    </div>
  )
}

export default App
