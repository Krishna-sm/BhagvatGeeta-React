import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import { Chapters } from '../../types/Chapters';
import { Link } from 'react-router-dom';

const Card1 = (props:Chapters) => {
    // console.log({props});
    
  return (
    <>
                
      <Link to={`/chapter/${props.chapter_number}`}  className="p-2  md:w-[70%] w-[96%] mx-auto my-1">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg  shadow-sm duration-300 hover:shadow-md">
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">{props.translation}</h2>
            <p className="text-gray-500">{props.name}</p>
          </div>
          {/* <img alt="team" src="https://dummyimage.com/80x80" /> */}
          <BsFillArrowRightCircleFill
          className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" 
          />
        </div>
      </Link>
    </>
  )
}

export default Card1