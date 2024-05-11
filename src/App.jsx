
import { BrowserRouter, Routes, Route } from "react-router-dom";



import L from "./components/l";
import S from "./components/s";
import Home from "./components/home";
import Cart from "./components/cart";





function App() {
  

  return (
    <>
     {/* <Home/>
     <Cart/> */}

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="cart" element={<Cart />} />
          <Route path="home" element={<Home/>} />
          <Route path="l" element={<L/>} />
          <Route path="s" element={<S/>} />
      </Routes>
    </BrowserRouter>
     {/* <L/>
     <S/> */}
   
     {/* <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<S />} />
          <Route path="/s" element={<S />} />
          <Route path="/l" element={<L />} />
         
        </Routes>
     </BrowserRouter> */}
     
    </>
  )
}

export default App
