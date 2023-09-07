import React, { useEffect } from 'react'
import {BiArrowBack} from 'react-icons/bi';
import {  useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { useMainContext } from '../context/MainContext';
import Card2 from '../components/reuseable/Card2';

const Sloks = () => {
    const navigate = useNavigate();
    const {id,verse} = useParams(); 

    const {slock,getSlock} = useMainContext();

    useEffect(()=>{
      const numericId = id ? parseInt(id, 10) : 0;
      const verseId = verse ? parseInt(verse, 10) : 0;
      getSlock(numericId,verseId);
    },[id,verse])
  
  return (
    <div className='min-h-screen w-full bg-blue-200 py-2 md:py-14'>
    <div className="md:w-[70%] mx-auto bg-white min-h-screen py-14">
            <div className="w-full py-10 px-10 flex flex-col md:flex-row md:items-center ">
                <BiArrowBack 
                onClick={()=>navigate(-1)}
                className='text-lg md:text-3xl w-10 h-10 p-1 rounded-full bg-black text-white' />
                <h1 className="text-center text-2xl md:text-3xl mx-auto text-zinc-700 font-bold">
                {id}/{verse} 
                </h1>
            </div>
            <hr  className='h-[1.9px] bg-black' />

        {slock && slock.chapter<1 && <Loader/> }
{slock && slock.chapter>=1 && <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
        <h1 className="text-center text-xl my-4 md:text-3xl text-zinc-600 font-bold capitalize">
       {slock && slock.slok}
        </h1>
        {/* <hr className="w-1/2 my-5 h-[1.9px] bg-orange-600 mx-auto" /> */}
        <h1 className="text-center text-xl md:text-3xl text-zinc-600 font-bold capitalize">
       {slock && slock.transliteration}
        </h1>
        {/* <hr className="w-1/2 my-5 h-[1.9px] bg-orange-600 mx-auto" /> */}

        <div className="py-10">
        
        <Card2 slok={slock?.tej.slok} key={Math.random()*10}  author={slock?.tej.author} name='Tej' />
        <Card2 slok={slock?.siva.slok} key={Math.random()*10}  author={slock?.siva.author} name='Siva' />
        <Card2 slok={slock?.purohit.slok} key={Math.random()*10}  author={slock?.purohit.author} name='Purohit' />
        <Card2 slok={slock?.chinmay.slok} key={Math.random()*10}  author={slock?.chinmay.author} name='chinmay' />
        <Card2 slok={slock?.san.slok} key={Math.random()*10}  author={slock?.san.author} name='San' />
        <Card2 slok={slock?.adi.slok} key={Math.random()*10}  author={slock?.adi.author} name='Adi' />
        <Card2 slok={slock?.gambir.slok} key={Math.random()*10}  author={slock?.gambir.author} name='Gambir' />
        <Card2 slok={slock?.madhav.slok} key={Math.random()*10}  author={slock?.madhav.author} name='Madhav' />
        <Card2 slok={slock?.anand.slok} key={Math.random()*10}  author={slock?.anand.author} name='Anand' />
        <Card2 slok={slock?.rams.slok} key={Math.random()*10}  author={slock?.rams.author} name='Rams' />
        <Card2 slok={slock?.raman.slok} key={Math.random()*10}  author={slock?.raman.author} name='Raman' />
        <Card2 slok={slock?.abhinav.slok} key={Math.random()*10}  author={slock?.abhinav.author} name='Abhinav' />
        <Card2 slok={slock?.sankar.slok} key={Math.random()*10}  author={slock?.sankar.author} name='Sankar' />
        <Card2 slok={slock?.jaya.slok} key={Math.random()*10}  author={slock?.jaya.author} name='Jaya' />
        <Card2 slok={slock?.vallabh.slok} key={Math.random()*10}  author={slock?.vallabh.author} name='Vallabh' />
        <Card2 slok={slock?.ms.slok} key={Math.random()*10}  author={slock?.ms.author} name='Ms' />
        <Card2 slok={slock?.srid.slok} key={Math.random()*10}  author={slock?.srid.author} name='Srid' />
        <Card2 slok={slock?.dhan.slok} key={Math.random()*10}  author={slock?.dhan.author} name='Dhan' />
        <Card2 slok={slock?.venkat.slok} key={Math.random()*10}  author={slock?.venkat.author} name='Venkat' />
        <Card2 slok={slock?.puru.slok} key={Math.random()*10}  author={slock?.puru.author} name='Puru' />
        <Card2 slok={slock?.neel.slok} key={Math.random()*10}  author={slock?.neel.author} name='Neel' />
       

        </div>


  </div>
</section>}


    </div>
</div>
  )
}

export default Sloks