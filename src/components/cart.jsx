import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cart = () => {
  const [showData, setShowData] = useState([])
  const myCartApi = "http://localhost:3000/cartData";


  useEffect(() => {
    getData();
  }, []);
//  total price 
  let val = "";
  const totalPrice = showData.reduce((acc, item) => {
    val = item.price;
    return acc + parseInt(val);
  }, 0);

  // total items 
   let totalItems = showData.reduce((acc, item) => {
    return acc + 1;
  }, 0);


  const getData = async () => {
    const response = await fetch(myCartApi);
    const mydata = await response.json();
    console.log(mydata)
    setShowData(mydata)
  }; 



  async function deleteItem(id) {
      const response = await fetch(`${myCartApi}/${id}`, {
        method: "DELETE",
      })
      alert("Item deleted successfully");
  }





  return (
    <div>
      <header className='bg-blue-400 shadow-2xl sticky top-0'>
        <Link to="/home"><button className='font-bold m-2 rounded-2xl bg-green-500 p-1 w-32 '>Back to Home</button></Link>
      </header>
      <section  className='font-semibold text-serif p-2'>
        <h1 className='p-2 shadow-lg'>Numbers of Items : {totalItems}  </h1>
        <h2 className='p-2 shadow-lg'>Total Prices of Items : $ {totalPrice}</h2>
      </section>
      <main className='grid  sm:grid-cols-4 grid-cols-2'>
       
       {showData && showData.map((item) => (
         <div className='p-3 shadow-xl m-2 flex gap-2 flex-col justify-between items-center' key={item.id}>
           <img className='w-32 rounded' src="https://elearningindustry.com/wp-content/uploads/2020/06/3d-learning-is-the-future-of-education.png" alt="" />
           <h2 className='font-bold text-pink-600'>{item.title}</h2>
           <p>$ {item.price}</p>
           <p>{item.description}</p>
           <button className='bg-green-500 p-1 rounded-2xl w-32 font-semibold'   onClick={() => deleteItem(item.id)}>Delete Item</button>
         </div>
       ))}
     </main>
    </div>
  )
}

export default Cart