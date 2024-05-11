import React from 'react'
import { Link } from 'react-router-dom';

const S = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
    <div style={{backgroundImage:"url(./src/assets/ok.jpg)", backgroundSize:"cover"}} className='min-w-80 w-96 h-96 flex flex-col justify-center border-2 p-5 gap-6 rounded-md shadow-lg'>
      <h1 className='font-bold font-serif text-4xl text-slate-900 text-center'>SignUp</h1>
      <input className='border-2 rounded pl-1 bg-transparent placeholder-slate-300' type="text" placeholder='Enter Your Name' />
      <input className='border-2 rounded pl-1 bg-transparent placeholder-slate-300' type="email" placeholder='Enter Your Email' />
      <input className='border-2 rounded pl-1 bg-transparent placeholder-slate-300' type="password" placeholder='Enter Your Password' />
      <div className='grid grid-cols-2 gap-2'> 
      {/* <Link to="/s" > */}
        <button className='hover:scale-105  hover:bg-red-400 bg-blue-400 text-white font-bold p-1 rounded  w-full'>
         SignUp
        </button>
        {/* </Link> */}
        <Link to="/l" >
          <button className='hover:scale-105  hover:bg-red-400 bg-blue-700 text-white font-bold p-1 rounded w-full'>
         Login
        </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default S