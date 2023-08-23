import React from 'react'
import {Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div> 

    <nav className=' flex flex-row p-6 gap-4 font-bold bg-slate-500  '>  

   <div  > <Link to="/" className='text-white' > Create Tasks </Link> </div>   
 
   <div  > <Link to="/read" className='text-white' > All Tasks </Link> </div>   
 
  </nav>
    
    
         </div>
  )
}

export default Navbar