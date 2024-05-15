import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const S = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const postData = () => {
  //   let obj = {
  //     username,
  //     password,
  //   };
    const postData = () => {
    let obj = {
      username,
      password,
    };
    let data = fetch("http://localhost:3000/authData", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json;",
      },
    });
  };

  function handlesubmit() {
    postData();
    alert("Your Sign Up successfully")
    navigate("/l");
  }


  
  return (
    <div className='flex justify-center items-center w-full h-screen text-white'>
    <div style={{backgroundImage:"url(./src/assets/ok.jpg)", backgroundSize:"cover"}} >
      <form className='min-w-80 w-96 h-96 flex flex-col justify-center border-2 p-5 gap-6 rounded-md shadow-lg' action="" onSubmit={handlesubmit}>
      <h1 className='font-bold font-serif text-4xl text-slate-900 text-center'>SignUp</h1>
     
      <input className='border-2 rounded pl-1 bg-transparent placeholder-slate-300' type="email" placeholder='Enter Your Email' 
        value={username}
        onChange={(e) => setUsername(e.target.value)} />
      <input className='border-2 rounded pl-1 bg-transparent placeholder-slate-300' type="password" placeholder='Enter Your Password' 
       value={password}
       onChange={(e) => setPassword(e.target.value)}/>
      <div className='grid grid-cols-2 gap-2'> 
      {/* <Link to="/s" > */}
        <button className='hover:scale-105  hover:bg-red-400 bg-blue-400 text-white font-bold p-1 rounded  w-full' onClick={handlesubmit}>
         SignUp
        </button>
        {/* </Link> */}
        <Link to="/l" >
          <button className='hover:scale-105  hover:bg-red-400 bg-blue-700 text-white font-bold p-1 rounded w-full'>
         Login
        </button>
        </Link>
      </div>
      </form>
    </div>
  </div>
  )
}

export default S