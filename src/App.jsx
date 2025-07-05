import React from 'react'
import Sidebar from './components/Sidebar'
import Workarea from './components/Workarea'

const App = () => {
  return (
    <div className='hero flex w-screen h-screen overflow-clip bg-[#f8fafc]'>
      <Sidebar/>
      <Workarea/>
    </div>
  )
}

export default App
