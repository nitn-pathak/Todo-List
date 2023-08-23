import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {

    const url = useNavigate();
    const [name,Setname] = useState([""]);
    const [email,Setemail] = useState([""]);
    const [id,Setid] = useState(0);
    
    useEffect(()=>{

           Setid(localStorage.getItem("id"));
           Setemail(localStorage.getItem("email"));
           Setname(localStorage.getItem("name"));



       },[])

     const handleUpdate =(e)=>{

        e.preventDefault();

        axios.put(`https://64e2e32abac46e480e77deb4.mockapi.io/crud/${id}`,
         {
          name:name,
          email:email
        })
        .then(()=>{
           url('/read')})



      }

  return (
    <div>
{/*         
         <form>
        
        <h1> Update </h1>

      <label>First name:</label>
      <input type="text" id="fname" name="name" value={name}  onChange={(e)=>Setname(e.target.value)} /> <br />

      <label> Email :</label>
      <input type="email" id="email" name="email" value={email} onChange={(e)=>Setemail(e.target.value)} /><br />

        <button className='btn bg-blue-500'  type='submit' onClick={handleUpdate} > Update </button>
     
          
    
       </ form>  */}


<div className="w-full max-w-xs mx-auto ">
  
   <h1 className='font-bold text-center text-3xl p-2'> Edit Task </h1>
  <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4  bg-slate-500 ">
    <div className="mb-4">
      <label className="block  text-white text-sm font-bold mb-2" for="username"  >
          Write your Task  
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fname" name="name" value={name} type="text" placeholder="Task..." onChange={(e)=>Setname(e.target.value)}/>
    </div>
   
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto " onClick={handleUpdate} type="button">
        Edit
      </button>
      
    </div>
  </form>
</div>
   

    </div>
  )
}

export default Update