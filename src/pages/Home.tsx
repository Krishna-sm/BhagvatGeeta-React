import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen w-full bg-blue-200  flex justify-center items-center flex-col py-2 md:py-10 '>
    <div className="md:w-[70%] mx-auto bg-white min-h-screen mb-4">

     <div className="flex justify-center flex-col">
          <img src="https://bhagavadgitaapi.in/slok/krishna.png" alt=""  className='w-1/2 mx-auto'/>
          <img src="https://bhagavadgitaapi.in/slok/11/52/gita.svg" alt="" />
     </div>
     <div className="container flex justify-center -mt-24 ">
      <Link to='/chapters' className=" px-3 py-2 md:px-12 md:py-3 mx-auto bg-red-600 rounded-xl hover:shadow-xl duration-300 text-white">
        Let Start
      </Link>
     </div>
     </div>
    </div>
  )
}

export default Home
