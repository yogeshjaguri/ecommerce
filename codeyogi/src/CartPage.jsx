import React, { useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im';
import { getProductData } from './api';
import Loading from './Loading';

function CartPage({cart, updateCart}) {
    const [loading, setloading] = useState(true);
    const [products, setProducts] = useState([]);
    const [localCart, setLocalCart] = useState(cart);
    const productIds = Object.keys(cart);
    
   
    useEffect(
        function () {
            setLocalCart(cart);
        },
        [cart]
    );
 
    useEffect(function(){
        setloading(true);
        const myProductPromises = productIds.map((id) => 
           getProductData(id));

        Promise.all(myProductPromises).then(function (products) {
            setProducts(products);
            setloading(false);
        })
    },
    [cart]
    );

    function handleRemove (productId) {

        const newCart = {...cart};
        delete newCart[productId];
        updateCart(newCart);
    }

    function updateMyCart() {
        updateCart(localCart);
    }

    function handleChange (newValue, productId) {
        const newLocalCart = {...localCart, [productId]: newValue};
        setLocalCart(newLocalCart);
    }

        if(loading) {
            return <Loading />
        }

    

  return (
    <div>
    {products.map(function(p) {
        
        return (
        <div key= {p.id}>
            {p.title}{" "}
            <input 
            productid={p.id}
            type="number" 
            className='w-12 p-1 border border-gray-300 rounded-md mx-2' 
            value={localCart[p.id]}
            onChange={(event) => {
                handleChange(+event.target.value, p.id);
            }}
            />
            <button productid={p.id} onClick={(event)=> {
                handleRemove(p.id);
            }}>
                <ImCross/>
            </button>
        </div>);
    })}
    <button 
    className='p-3 bg-primary-dark rounded-md' 
    onClick={updateMyCart}>
        Update cart
    </button>
    </div>
  );
}

export default CartPage;