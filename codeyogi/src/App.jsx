import React, { useState } from "react";
import NavBar from "./NavBar";
import ProductListPage from "./ProductListPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";
import CartPage from "./CartPage";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPswd from "./ForgotPswd";


function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);


  function handleAddToCart (productId, count) {
    const oldCount = cart[productId] || 0;

    const newCart= {...cart, [productId]: oldCount + count};
    updateCart(newCart);
  }

  function updateCart(newCart){
  setCart(newCart);
  const cartString = JSON.stringify(newCart)
  localStorage.setItem("my-cart", cartString);
  }

  const totalCount = Object.keys(cart).reduce(function(previous, current) {
    return previous + cart[current];
  }, 0)

  return (
    
      <div className="bg-gray-200 h-screen overflow-scroll flex flex-col">
        <NavBar productCount={totalCount}/>
        <div className="grow">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ProductListPage />} />
              <Route path="/cart" element={<CartPage cart={cart} updateCart={updateCart}/>} />
              <Route path="/products/:id" element={<ProductDetail onAddToCart={handleAddToCart}/>} />
              <Route path='*' element={<NotFound />} /> 
              <Route path='login' element={<Login />} /> 
              <Route path='signup' element={<Signup />} /> 
              <Route path='forgotpswd' element={<ForgotPswd />} /> 
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    
  );
}

export default App;
