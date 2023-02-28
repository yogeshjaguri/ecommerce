import React, { useState } from "react";
import NavBar from "./NavBar";
import ProductListPage from "./ProductListPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";


function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);

  function handleAddToCart (productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart= {...cart, [productId]: oldCount + count}
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
              <Route index element={<ProductListPage />} />
              <Route path="/products/:id" element={<ProductDetail onAddToCart={handleAddToCart}/>} />
              <Route path='*' element={<NotFound />} /> 
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    
  );
}

export default App;
