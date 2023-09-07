import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>  
            <nav className="bg-gray-900 flex justify-between">
                <div className=" px-2 md:px-10 py-4 flex ">
                    <Link to={'/'} className='text-3xl text-white font-serif'>BhagvatGita</Link>
                </div>
                {/* Mobile Menu */}
           
            </nav>
    </>
  )
}

export default Navbar
