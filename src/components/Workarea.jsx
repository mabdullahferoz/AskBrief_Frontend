import React, { useState } from 'react'

const Workarea = () => {
    const [type, setType] = useState("doc")
    return (
        <div className='w-full h-full box-content overflow-auto text-3xl font-black flex flex-col'>
            <div className="navbar w-full h-24 bg-white border-b-1 border-gray-300 flex items-center p-5">
                <span className='logo text-blue-500'>AskBrief</span>
            </div>
            <div className='flex flex-col overflow-y-auto overflow-x-hidden items-center h-full px-5 '>
                <div className="input-box h-80 w-4xl p-5 m-5 flex flex-col">
                    <div className=" mx-5 flex text-sm font-semibold text-gray-400 border-b-1 border-gray-300">
                        <span onClick={() => { setType("text") }} className={(type == "text" ? "border-b-2 px-10 py-2 border-blue-500 cursor-pointer" : "px-10 py-2 transition-all duration-75 hover:border-b-2 border-blue-500 cursor-pointer")}>Paste Text</span>
                        <span onClick={() => { setType("doc") }} className={(type == "text" ? "px-10 py-2 transition-all duration-75 hover:border-b-2 border-blue-500 cursor-pointer" : "px-10 py-2 border-b-2 border-blue-500 cursor-pointer") + 'px-10 py-2 hover:border-b-2 border-blue-500 cursor-pointer'}>Upload Documnet</span>
                    </div>
                    <div className="input-field h-full w-full mt-5">
                        {type == "text" ? (
                            <textarea className='w-full h-full box-border max-h-full min-h-full overflow-y-auto scrollbar-custom p-5 border-1 border-gray-300 bg-white rounded-lg text-lg font-normal' placeholder='Paste your text here...'></textarea>
                        ) : (
                            <input type="file" className='w-full h-full p-3 border-2 border-gray-300 rounded-lg' />
                        )}
                    </div>
                    <div className='text-sm text-white font-bold bg-blue-600 w-40 p-2 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-400 mt-3 '>
                        Process Document
                    </div>
                </div>
                <div className="chat-box h-40 w-96 bg-teal-200">chat box here</div>
            </div>
        </div>
    )
}

export default Workarea
