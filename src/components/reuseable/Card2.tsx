import React from 'react'
import {BiClipboard} from 'react-icons/bi';
import {toast} from 'react-hot-toast';
const Card2 = ({author,slok,name}:{author?:string,slok?:string,name:string}) => {


    const CopyToClipBoard = ():void=>{
                navigator.clipboard.writeText(slok?slok:'');
                toast.success("Slok Copied Success");
    }

  return (
    <>
                 <div className="py-6  md:w-[80%] w-[96%] mx-auto my-1">
        <div className="h-full flex items-centerp-4 rounded-lg ">
          <div className="flex-grow">
        <div className="flex justify-between items-center">
        <span className="text-gray-900 mb-3 text-xl title-font font-medium">{author}({name})</span>
       <button onClick={CopyToClipBoard}  title='Copy Slok' className="px-2 py-2 bg-black rounded-full text-white">
       <BiClipboard/>
       </button>
        </div>
            <p className="text-gray-500 text-xl">{slok}</p>
          </div>
         
          
        </div>
      </div>
    </>
  )
}

export default Card2