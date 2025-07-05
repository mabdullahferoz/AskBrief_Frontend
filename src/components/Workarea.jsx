import React from 'react'

const Workarea = () => {
  return (
    <div className='w-full h-full overflow-auto bg-amber-100 text-3xl font-black flex flex-col'>
      <div className="navbar w-full h-20 bg-white border-b-1 border-gray-300 flex items-center p-5">
        <span className='logo text-blue-500'>AskBrief</span>
      </div>
      <div className='flex h-full w-full flex-col items-center '>
        <div className="input-box h-40 w-96 bg-green-100">File upload box here</div>
        <div className="chat-box h-40 w-96 bg-teal-200">chat box here</div>
      </div>
    </div>
  )
}

export default Workarea
