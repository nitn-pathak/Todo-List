import React, {useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Link } from "react-router-dom";


const Create = () => {

    let history = useNavigate();

  const header = {"Access-Control-Allow-Origin":"*"};

   const [name,Setname] = useState([""]);

   const [email,Setemail] = useState([""]);

   const handlesubmit =(e) =>{
                    
            e.preventDefault();

                console.log("clicked");
               axios.post('https://64e2e32abac46e480e77deb4.mockapi.io/crud'
                  ,{ 
                name:name,
                email:email               
                     }
               ,header
               ).then(()=>{ history('/read')
              });

               

               
           }


  return (
    // <div> 

    //  <form>
        
    //      <h1> Create </h1>

    //    <label>First name:</label><input type="text" id="fname" name="name"  onChange={(e)=>Setname(e.target.value)} /> <br />

    //    <label> Email :</label><input type="email" id="email" name="email"  onChange={(e)=>Setemail(e.target.value)} /><br />

    //      <button className='btn bg-blue-500'  type='submit' onClick={handlesubmit} > Submit </button>
      
           
     
    //  </ form>

      
    // </div>

<div className="w-full max-w-xs mx-auto ">
  
   <h1 className='font-bold text-center text-3xl p-2'> Create Tasks </h1>
  <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4  bg-slate-500 ">
    <div className="mb-4">
      <label className="block  text-white text-sm font-bold mb-2" for="username"  >
         Write your Task 
      </label>
      <input className="shadow appearance-none border required: rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Task..." onChange={(e)=>Setname(e.target.value)}/>
    </div>
   
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto " onClick={handlesubmit} type="button">
        Create
      </button>
      
    </div>
  </form>
</div>

  )
}

export default Create 