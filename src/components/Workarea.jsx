import React, { useState } from 'react'
import UploadFile from './UploadFile'
import { FaFileLines, FaPaperPlane } from 'react-icons/fa6'
import { BiSolidCopy } from 'react-icons/bi'
import {  toast } from 'react-toastify'
import { GrSend } from 'react-icons/gr'

const Workarea = () => {
    const [type, setType] = useState("doc")
    const msgs = ["Hello","Hi, how can I help you?","what are the restrictions mentioned for the player?","The player is not allowed to play in the tournament if they have been suspended for any reason."]

    const [chat, setChat] = useState(msgs)
    const handleCopySummary = () => {
        const summaryText = document.getElementById('summary').innerText;
        navigator.clipboard.writeText(summaryText)
            .then(() => {
                toast.success("Summary copied to clipboard!");
            })
            .catch(err => {
                toast.error('Failed to copy summary: ', err);
            });
    } 

    return (
        <div className='w-full h-full box-content text-3xl font-black flex flex-col'>
            {/* <ToastContainer className={"text-sm"} position='top-right' autoClose={2000} theme='light'/> */}
            <div className="navbar w-full h-24 bg-white border-b-1 border-gray-300 flex items-center p-5">
                <span className='logo text-blue-500'>AskBrief</span>
            </div>
            <div className='flex flex-col overflow-y-scroll overflow-x-hidden items-center h-full px-5 '>
                <div className="input-box h-80 min-h-80 w-4xl p-5 mt-5 flex flex-col">
                    <div className=" mx-5 flex text-sm font-semibold text-gray-400 border-b-1 border-gray-300">
                        <span onClick={() => { setType("doc") }} className={(type == "text" ? "px-10 py-2 transition-all duration-75 hover:border-b-2 border-blue-500 cursor-pointer" : "px-10 py-2 border-b-2 border-blue-500 cursor-pointer") + 'px-10 py-2 hover:border-b-2 border-blue-500 cursor-pointer'}>Upload Documnet</span>
                        <span onClick={() => { setType("text") }} className={(type == "text" ? "border-b-2 px-10 py-2 border-blue-500 cursor-pointer" : "px-10 py-2 transition-all duration-75 hover:border-b-2 border-blue-500 cursor-pointer")}>Paste Text</span>
                    </div>
                    <div className="input-field h-full w-full mt-5">
                        {type == "text" ? (
                            <textarea className='w-full h-full resize-none overflow-y-auto scrollbar-custom p-2 border-1 border-gray-300 bg-white rounded-lg text-lg font-normal' placeholder='Paste your text here...'></textarea>
                        ) : (
                            <UploadFile />
                        )}
                    </div>
                </div>
                <div className='btn w-4xl px-5'>
                    <div className='text-sm text-white font-bold bg-blue-600 w-40 p-2 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-500 mb-3 '>
                        Process Document
                    </div>
                </div>
                <div className='summary-box max-h-full pb-15 box-border'>
                    <div className='flex flex-col w-4xl min-h-80 max-h-full overflow-y-auto scrollbar-custom m-5 p-5 border border-gray-300 bg-white rounded-lg shadow-md'>
                        <div className='heading font-bold text-lg flex justify-between items-center mb-5'> <span className='flex items-center'><FaFileLines className='h-6 w-6 mr-2' /> Summary</span> <span id='copy-summary' onClick={handleCopySummary} className='text-sm rounded-lg hover:bg-gray-200 cursor-pointer px-3 py-1 flex items-center gap-2'>Copy <BiSolidCopy className='h-8 w-8'/></span></div>
                        <p id='summary' className='summary text-lg font-normal text-justify px-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat ea, rerum amet accusamus molestiae veniam sequi expedita eos asperiores officia corporis, magnam provident eveniet id, obcaecati tempore neque totam ratione nisi quisquam recusandae laborum! Similique eum corrupti, tempore sint nobis voluptas nostrum neque veritatis accusamus vel aperiam assumenda perspiciatis animi dolorum sequi illum reiciendis laboriosam sunt minus! Dolor, architecto fugit ipsum illum nihil voluptatem adipisci in rem maiores quae possimus aliquam quam. Optio ea dignissimos, veritatis nisi dolore alias eum exercitationem soluta debitis nemo mollitia sed quaerat? Nemo sint ipsum corporis eum, officia in magnam cum quidem cumque numquam accusantium quos minima recusandae, voluptatibus repellat. Similique, iusto explicabo in dolore exercitationem illum blanditiis commodi dolorem labore voluptates repellat voluptas harum ipsam at minima dolorum accusamus nemo laudantium esse debitis porro? Ullam, excepturi! Dolorem odit facere possimus explicabo, totam delectus illo fugiat libero ipsum laboriosam, quas tenetur quod, molestiae porro modi obcaecati perferendis illum! Enim ipsum provident cupiditate fuga, perspiciatis rerum alias? Harum, ipsam nesciunt voluptas quia accusantium impedit, sunt eius enim, delectus vel beatae quibusdam nemo! Inventore minus illum id perspiciatis modi cumque distinctio dolorem quod praesentium consequuntur adipisci vero maiores provident aut enim repellendus, dicta culpa vitae. Aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptate odit at distinctio quaerat magni expedita, obcaecati atque harum nostrum vero iusto assumenda sunt eius. Et dolorum quo tenetur accusamus. Labore perferendis et odit aliquam ab saepe sint vero quae quaerat, ipsam molestiae nesciunt cupiditate placeat voluptatibus odio, minus neque facere hic ut nemo! Veniam deserunt ex ratione quas porro, possimus esse asperiores obcaecati totam quis consequatur blanditiis, voluptate animi quae dolore nulla beatae eligendi quaerat eos voluptas cupiditate dolor. Laudantium quisquam neque unde, asperiores deserunt ab, delectus accusamus est inventore ducimus hic sapiente nesciunt veniam omnis nobis soluta reprehenderit dolorum eum. Totam earum odit unde maxime nesciunt esse, aspernatur aliquam ab assumenda error. Impedit aperiam quibusdam aliquam molestias fuga nisi fugit, quis at deleniti blanditiis ducimus repellendus nihil voluptatem laboriosam dolorem aspernatur assumenda sunt optio quod labore itaque ab ipsum alias eligendi! Nisi quod, nostrum dolore saepe expedita tempore sed omnis delectus temporibus ipsam voluptatem in. Suscipit iusto quos explicabo, voluptatem, odio illum neque veritatis quam, nulla vel laudantium cupiditate repudiandae. Iste rerum soluta quos sequi aliquid reprehenderit vel vitae, animi tempore, porro et eligendi omnis error quae officia eius incidunt suscipit nostrum dignissimos, autem sit inventore repellat? Asperiores.</p>
                    </div>
                </div>

                <div className="chat-box max-h-full">
                    <div id='msgs' className="flex flex-col w-4xl text-sm font-normal min-h-96 max-h-full overflow-y-auto scrollbar-custom mx-5 p-5 border border-gray-300 rounded-t-lg shadow-md bg-white">
                         {chat.map((msg,index)=>(
                            <div key={index} className={`msg w-full flex ${index % 2 === 0 ? 'justify-end' : ' justify-start'}  mb-3`}>
                                <div className={`msg-content border shadow-md rounded-b-3xl max-w-2/3 p-3 ${index % 2 === 0 ? 'bg-blue-100 border-blue-200 rounded-tl-3xl ': 'bg-gray-100 border-gray-200 rounded-tr-3xl'}`}>
                                    {msg}
                                </div>

                            </div>
                         ))} 
                    </div>
                    <div id="chat-input" className="w-4xl h-20 bg-white border-x border-b border-gray-300 flex gap-2 items-center justify-between mx-5 mb-10 p-5 rounded-b-lg shadow-md">
                        <input type="text" className='w-full h-full resize-none overflow-y-auto scrollbar-custom py-2 px-4 border-1 border-gray-300 focus:outline-none focus:border-gray-400 bg-white rounded-4xl text-sm font-normal' placeholder='Ask about this document...' />
                        <div className='send-btn flex items-center justify-center bg-blue-600 h-10 w-10 rounded-full cursor-pointer hover:bg-blue-500 transition-all '> <FaPaperPlane color='white' className='h-5 w-5 mr-0.5'/> </div>
                    </div>

                </div> 
               
            </div>
        </div>
    )
}

export default Workarea
