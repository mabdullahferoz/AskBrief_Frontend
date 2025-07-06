import React, { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'

const UploadFile = () => {

  const [file, setFile] = useState(null)
  const [dragactive, setDragactive] = useState(false)
  const allowedTypes = ["text/plain" , "application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]

  const handleClick = () => {
    const fileInput = document.getElementById('upload-file');
    fileInput.click();
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragactive(true);
    e.dataTransfer.dropEffect = 'copy'; // Show copy cursor
  }
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragactive(false);
  }
  const handleDrop = (e) => {
    e.preventDefault();
    setDragactive(false);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const selectedFile = droppedFiles[0];
      if (!allowedTypes.includes(selectedFile.type)) {
        toast.error("Unsupported file type. Please upload a PDF, DOCX, or TXT file.");
        return;
      }
      setFile(selectedFile);
      console.log(selectedFile);
    }
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile){
      setFile(selectedFile);
      console.log(selectedFile);
    }
  }

  return (
    <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} onClick={handleClick} className={`drop-zone w-full h-full cursor-pointer border-dashed flex flex-col items-center justify-evenly p-2 border-2 ${file? "border-green-500 bg-green-50":"border-gray-300"} border-gray-300 text-gray-400 font-normal text-lg rounded-lg text-center `}>
      <div className='flex flex-col items-center mt-1'>
        <FaCloudUploadAlt color="#94a3b8" className='w-14 h-14' />
        {
          file? <span className='text-blue-600'>{file.name}</span> : <span>Drag & drop files here or click to browse</span>
        }
      </div>

      <div className='flex flex-col items-center mb-1'>
        <input type="file" id='upload-file' accept='.pdf,.docx,.txt' className='hidden' onChange={handleFileChange} />
        {/* <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover theme='light' className={"text-sm"}/> */}
        <label htmlFor="upload-file" className='bg-blue-600 cursor-pointer hover:bg-blue-500 transition-all p-2 rounded-lg font-medium mt-3 text-lg  text-white '>Browse Files</label>
        <span className='text-sm mt-1'>Supported formats: PDF, DOCX, TXT</span>
      </div>
    </div>
  )
}

export default UploadFile
