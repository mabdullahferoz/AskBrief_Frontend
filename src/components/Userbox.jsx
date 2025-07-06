import React, { useState } from 'react'
import { FaGear } from 'react-icons/fa6'

const Userbox = ({user}) => {
  return (
    <div className="w-full p-3 flex items-center justify-center gap-5"> 
      <div className="img bg-blue-500 hover:bg-blue-200 hover:text-blue-600 hover:font-black cursor-pointer  transition-all rounded-full h-10 w-10 flex items-center justify-center text-xl text-white font-bold">{user.username.at(0)}</div>
      <div className="flex flex-col">
        <span className='font-semibold text-lg '>{user.username}</span>
        <span className='font-normal text-gray-600'>{user.email}</span>
    </div>
    <div className="settings h-10 w-10 flex items-center justify-center hover:transform hover:rotate-45 transition-all duration-300 cursor-pointer">
        <FaGear color='#94a3b8' size="2.3em"/>
    </div>
    </div>
  )
}

export default Userbox
