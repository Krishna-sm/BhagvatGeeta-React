import React, { useEffect } from 'react'
import {BiArrowBack} from 'react-icons/bi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMainContext } from '../context/MainContext';
import Loader from '../components/Loader';

const Chapter = () => {
    const navigate = useNavigate();
    const {id} = useParams(); 
    const {getChapter,chapter} = useMainContext();
    useEffect(()=>{
        const numericId = id ? parseInt(id, 10) : 0;
        // if(typeof parseInt(id)==='number'){
            getChapter(numericId);
        // }
    },[id])
  return (
    <div className='min-h-screen w-full bg-blue-200 py-2 md:py-14'>
    <div className="md:w-[70%] mx-auto bg-white min-h-screen py-14">
            <div className="w-full py-10 px-10 flex flex-col md:flex-row md:items-center ">
                <BiArrowBack 
                onClick={()=>navigate(-1)}
                className='text-lg md:text-3xl w-10 h-10 p-1 rounded-full bg-black text-white' />
                <h1 className="text-center text-2xl md:text-3xl mx-auto text-zinc-700 font-bold">
                {chapter?.name} ( {chapter?.translation})       
                </h1>
            </div>
            <hr  className='h-[1.9px] bg-black' />

<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
        <h1 className="text-center text-2xl md:text-4xl text-zinc-600 font-bold capitalize">
        summary
        </h1>
        {chapter && chapter.chapter_number<1 && <Loader/> }
        {chapter && chapter.chapter_number>=1 && 
        <>
                 <div className="flex flex-wrap -m-2 py-14">

<p className="font-serif w-[90%] mx-auto  text-base md:text-xl mb-4" dangerouslySetInnerHTML={{__html:` ${chapter?.summary_en}`}}/>

<p className="font-serif w-[90%] mx-auto  text-base md:text-xl" dangerouslySetInnerHTML={{__html:`${chapter?.summary_hi}`}}/>

</div>
<Link to={`/sloks/${chapter.chapter_number}/${chapter.verses_count}`} className=" px-3 py-2 md:px-6 md:py-2 mx-auto bg-gray-900  text-xl text-end rounded-sm hover:shadow-xl duration-300 text-white float-right">
Read Sloks
</Link>
        
        </>
        
        }
   



  </div>
</section>


    </div>
</div>
  )
}

export default Chapter