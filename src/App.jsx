import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Workarea from './components/Workarea'
import { ToastContainer } from 'react-toastify'
import { useLocation } from 'react-router'

const App = () => {

  const [user, setUser] = useState({
    username: "username",
    email: "user@example.com"
  })

  const location = useLocation()

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")))
      console.log("User data loaded from session storage:", JSON.parse(localStorage.getItem("user")))
    }
  }, [location.pathname])
  

  return (
    <div className='hero flex w-screen h-screen overflow-clip bg-[#f8fafc]'>
      <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover theme='light' className={"text-sm"}/>
      <Sidebar user={user}/>
      <Workarea user = {user}/>
    </div>
  )
}

export default App
