import React, { useEffect, useState } from "react";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import { getProductData, getProductList } from "./api";
import Loading from "./Loading";
import NotFound from "./NotFound";

function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const p = getProductList(id);
      
      p.then(function (product) {
        setProduct(product);
        setLoading(false);
      });

      p.catch(function (error) {
        console.log("api ",error)
        setLoading(false);
      })
    },
    [id]
  );


  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick(){
    onAddToCart(id, count)
  }



  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <Link className="mt-2 text-indigo-500 flex items-centre" to="/">
        <HiArrowSmLeft className="text-5xl" /> Back
      </Link>
      <div className="w-80 bg-red-500 p-2">
        <img className="w-20" src={product.thumbnail} />
        <span>{product.category}</span>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <input 
          value={count} 
          onChange={handleCountChange} 
          className="border border-gray-700 rounded-md px-2 w-12" 
          type="number" 
        />
        <button 
        onClick={handleButtonClick} 
        className="px-4 py-2 rounded-md bg-primary-light ml-2">
          Add to cart
        </button>
      </div>
      <div className="flex justify-between py-5">
        <div>
          {id > 1 && (
            <Link
              className="mt-2 text-indigo-500 flex items-centre"
              to={"/products/" + (id - 1)}
            >
              <HiArrowSmLeft className="text-5xl" /> previous
            </Link>
          )}
        </div>
        <div>
          <Link
            className="mt-2 text-indigo-500 flex items-centre"
            to={"/products/" + (id + 1)}
          >
            <HiArrowSmRight className="text-5xl" /> next
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
