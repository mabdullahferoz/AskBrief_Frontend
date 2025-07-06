import React, { useEffect, useState } from 'react'
import Userbox from './Userbox'
import { FaPlus } from 'react-icons/fa6'

const Sidebar = ({user}) => {

    const [loggedin, setLoggedin] = useState(false)
    const [history, setHistory] = useState([])

    useEffect(() => {
      if(user.username != "username"){
        setLoggedin(true);
        setHistory([
            { title: "Chat with AI", description: "Discuss the latest trends in AI and technology." },
            { title: "Project Planning", description: "Brainstorm ideas for the new project." },
            { title: "Meeting Notes", description: "Summarize the key points from the last meeting." }
        ]);
      }
    
      
    }, )
    

    return (
        <div className='sidebar h-full md:w-80 transition-all flex flex-col  border-r-1 border-gray-300 bg-white'>
            <div className="new-chat w-full flex items center hustify-center border-b-1 border-gray-300">
                <div className="btn p-3 m-5 border-1 border-gray-300 w-full text-sm font-semibold text-center text-gray-700 hover:bg-gray-200 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all"> <FaPlus />New Chat</div>
            </div>
            {loggedin && (
                <>
                    <div className="history w-full max-h-[75%] border-b-1 border-gray-300 overflow-y-auto scrollbar-custom">
                        {history.length > 0 ? history.map((item, index) => (
                            <div key={index} className="chat-item p-3 hover:bg-gray-100 cursor-pointer transition-all">
                                <span className='text-sm font-semibold'>{item.title}</span>
                                <p className='text-xs text-gray-500'>{item.description}</p>
                            </div>
                        )) : (
                            <div className="no-history p-3 text-center text-gray-500">
                                No chat history available. Start a new chat!
                            </div>)}
                    </div>
                    <Userbox user = {user} />
                </>
            )
            }
        </div>
    )
}

export default Sidebar
