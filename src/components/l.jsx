import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const L = ({ setUserName, setIsUserLogin }) => {


  const navigate = useNavigate();
  const [loginData, setLoginData] = useState([]);
  console.log(loginData);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let data = await fetch("http://localhost:3000/authData");
    let json = await data.json();

    setLoginData(json);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    const usernamee = event.target.elements.email.value;
    const pass = event.target.elements.password.value;
    setUserName(usernamee);
    const userData = loginData.find((user) => user.username === usernamee);

    if (userData) {
      if (userData.password !== pass) {
        alert("Enter Password");
      } else {
        navigate("/home");
        setIsUserLogin(true);
      }
    } else {
      alert("Enter All details");
    }
  };

 

 



  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div style={{backgroundImage:"url(./src/assets/ok.jpg)", backgroundSize:"cover"}} className='min-w-80 w-96 h-96 flex flex-col justify-center border-2 p-5 gap-6 rounded-md shadow-lg'>
        <h1 className='font-bold font-serif text-4xl text-red-500 text-center'>Login</h1>
        
        <form onSubmit={handlesubmit} className=' text-white flex flex-col justify-center  gap-6 rounded-md shadow-lg'>
        <input className='border-2 rounded pl-1 bg-transparent placeholder-slate-300' type="email" placeholder='Enter Your Email' />
        <input className='border-2 rounded pl-1 bg-transparent placeholder-slate-300' type="password" placeholder='Enter Your Password' />
        <div className='grid grid-cols-2 gap-2'> 
        <Link to="/s" >
          <button className='hover:scale-105 hover:bg-red-400 bg-blue-400 text-white font-bold p-1 rounded w-full'>
            SignUp
          </button>
          </Link>
          {/* <Link to="/l" > */}
          <button className='hover:scale-105 hover:bg-red-400 bg-blue-700 text-white font-bold p-1 rounded w-full' type="submit">
            Login
          </button>
          {/* </Link> */}
        </div>
        </form>
        
      </div>
    </div>
  )
}

export default L;