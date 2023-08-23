import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import bin from '../assets/bin.png'
import edit from '../assets/edit.png'

const Read = () => {

    const [data,setData] =  useState([" "]);
    
     async function getData(){

        try{

        let result =  await axios(`https://64e2e32abac46e480e77deb4.mockapi.io/crud`);

        
          console.log('inside get data');

           setData(result.data);
            
      
            } 
      catch(e){

        console.log(e);
      }

         };
    
         async function handleDelete(id){

          axios.delete(`https://64e2e32abac46e480e77deb4.mockapi.io/crud/${id}`)
          .then(()=>{

            getData();
            
                })

         }

    useEffect(()=>{
            getData();
      },[]);


      function SetlocalStorage(id,email,name){
         
        localStorage.setItem("id",id)
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);



                  }

    
  return (
    <div> 

       <h1 className='text-center font-bold  text-3xl p-2' > All  Tasks </h1>
   <div className="flex flex-col p-10 ">
   <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
        
          <thead className="border-b font-medium dark:border-neutral-500">
          
            <tr>
              {/* <th scope="col" className="px-6 py-4">Id</th> */}
              <th scope="col" className="px-6 py-4">Tasks</th>
              {/* <th scope="col" className="px-6 py-4">Email</th> */}

              <th scope="col" className="px-6 py-4">Delete</th>
              <th scope="col" className="px-6 py-4">Edit</th>
              
           
            </tr>
     
          </thead>
 
          {   
              data.map((userData,key)=>{ 

                   return(<tbody key={key}>
      
               <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
               {/* <td className="whitespace-nowrap px-6 py-4 font-medium">{userData.id}</td> */}
               <td className="whitespace-nowrap px-6 py-4">{userData.name}</td>
              {/* <td className="whitespace-nowrap px-6 py-4">{userData.email}</td> */}
               <td>  <button className='bg-red-400 p-3 flex ' onClick={()=>{handleDelete(userData.id)} }> <img src={bin} className='h-4' alt="bin" /> Delete  </button> </td>
               <td>  <Link to="/update"> <button className='bg-blue-500 p-3 flex gap-1' onClick={()=>{SetlocalStorage(userData.id,userData.email,userData.name)}}> <img src={edit} className='h-4' alt="bin" />  Edit </button></Link> </td>
         
                     </tr>
                    
            
                           </tbody>)

                  
             })       
         }

        </table>
      </div>
    </div>
  </div>
   </div>



    </div>
  )
}

export default Read