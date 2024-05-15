import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";

const Home = () => {

  const [showData, setShowData] = useState([])
  const myPostApi = "http://localhost:3000/posts";




  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await fetch(myPostApi);
    const mydata = await response.json();
    console.log(mydata)
    setShowData(mydata)
  };


  const postData = (item) => {
    let data = fetch("http://localhost:3000/cartData", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
      },
    });
    alert("This item added successfully.")
  };



 
  return (
    <>
       <header className='h-14 sticky top-0 flex justify-between items-center  p-2 bg-[#343460] font-bold sm:text-xl'>
    <p className='flex justify-start items-center gap-2 p-1'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-DvbLTWEGbwKMvV9SWCUnsFBWtqpcdA4Yk95hRb55ZlkncBjDxbtsnyp5dUvxAckcZo&usqp=CAU" alt="logo" className='w-10 rounded-full' />
    <h1 className='text-white font-serif'>Abhinay</h1>
    </p>
   <p className='flex  gap-2 '>
    <Link to="/cart">
      <p className='bg-green-500 text-center  px-2  rounded-2xl flex gap-2 hover:scale-105'>
       <h1 className='hidden sm:block'>My</h1><h1 className=''>  Cart</h1> <h1 className='hidden sm:block'>Store</h1>
        </p>
      </Link>
    <Link to="/l">
     <h1 className='bg-green-500 text-center  px-2  rounded-2xl hover:scale-105'>
      LogOut
      </h1>
      </Link>
   </p>
      </header>
      <section className='p-1 font-semibold shadow-xl  grid justify-between  grid-cols-2 xl:grid-cols-5 gap-2  items-center'>
       <div className='pr-2 border-r-2 border-black  col-span-1 w-fit'>
       <label htmlFor="" className='font-bold text-xl'> Filter :  </label>
        <select name="" id="" >
            <option className='p-1 space-y-2' value="">Normal</option>
            <option className='p-1 space-y-2' value="">Low to High</option>
            <option className='p-1 space-y-2' value="">High to low</option>
        </select>
       </div>
       <div className='border-2 border-black rounded-full flex  col-span-1 w-fit'>
        <input type="text" placeholder='Search ' className='p-1 text-center rounded-l-full' />
        <button className='p-1 px-2  rounded-r-full hover:bg-blue-300 '>🔍</button>
       </div>
       <div className='  col-span-3'>
        <Marquee behavior="" direction="right">Upcoming mobile realme GT 5 Pro</Marquee>
       </div>
      </section>
      <main className='grid  sm:grid-cols-4 grid-cols-2'>
       
        {showData && showData.map((item) => (
          <div className='p-3 shadow-xl m-2 flex gap-2 flex-col justify-between items-center' key={item.id}>
            <img className='w-32 rounded' src="https://elearningindustry.com/wp-content/uploads/2020/06/3d-learning-is-the-future-of-education.png" alt="" />
            <h2 className='font-bold text-pink-600'>{item.title}</h2>
            <p>$ {item.price}</p>
            <p>{item.description}</p>
            <button className='bg-green-500 p-1 rounded-2xl w-32 font-semibold hover:bg-green-600 hover:scale-105' onClick={() => postData(item) }>Add To Cart</button>
          </div>
        ))}
      </main>
      <aside className=' flex justify-end  p-2 w-full text-xs font-mono sticky bottom-2 '>
       <div className='flex p-1 pr-3  items-center gap-2  rounded-full bg-blue-300 hover:scale-105 '>
         <img src="https://play-lh.googleusercontent.com/KJ67bsZzTxmEDKWHrUpOQBMrvivfgSeqYTKzr4dzxB9XRyXivkTMreyYDsSqsD00lg=w240-h480-rw" alt="" className='w-12 h-12 sm:w-16 sm:h-16 rounded-full '/>
        <p><h1>Hello, Abhinay</h1>
        <p>I'am your Assistant</p>
        <p>how may i can help you</p></p>
       </div>
      </aside>
      <footer className='bg-[#2f246d] h-10 text-white text-xs sm:text-lg flex justify-center items-center w-full relative bottom-0 '>
    All copyright 2024 and license claim.
     </footer>
    </>
  )
}
export default Home;