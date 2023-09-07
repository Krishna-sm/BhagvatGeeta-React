import React, { useEffect } from 'react'
import {BiArrowBack} from 'react-icons/bi';
import Card1 from '../components/reuseable/Card1';
import { useMainContext } from '../context/MainContext';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';

const Chapters = () => {
    const navigate = useNavigate();

    const {getChapters ,chapters} = useMainContext();
    useEffect(()=>{
        getChapters();
    },[])

    // console.log({chapters});
    
  return (
    <div className='min-h-screen w-full bg-blue-200 py-2 md:py-10'>
    <div className="md:w-[70%] mx-auto bg-white min-h-screen">
            <div className="w-full py-10 px-10 flex flex-col md:flex-row md:items-center ">
                <BiArrowBack

                onClick={()=>navigate(-1)}
                className='text-lg md:text-3xl w-10 cursor-pointer h-10 p-1 rounded-full bg-black text-white' />
                <h1 className="text-center text-2xl md:text-3xl mx-auto text-zinc-700 font-bold">
                    BhagvatGeeta Chapters             {chapters &&  <>({chapters.length})</> }

                </h1>
            </div>
            <hr  className='h-[1.9px] bg-black' />

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    {/* <h1 className="text-end text-xl text-zinc-500 md:text-4xl">Total(20)</h1> */}
    <div className="flex flex-wrap -m-2">
   
            {chapters && chapters.length<1 && <Loader/> }
            {chapters && chapters.length>1 
                    &&
                    chapters.map((cur,index)=>{
                        return <Card1 key={index} chapter_number={cur.chapter_number} name={cur.name} translation={cur.translation} />
                    })
            
            }
   
    </div>
  </div>
</section>


    </div>
</div>
  )
}

export default Chapters