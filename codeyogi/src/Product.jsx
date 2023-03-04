import React from 'react'
import { Link } from 'react-router-dom';

function Product({ thumbnail, category, title, price, id }) {
  return (
    <div className='max-w-xs'>
      <div className='w-full aspect-square'>
      <img className='w-full h-full object-cover' src={thumbnail} />
      </div>
      <div className='text-gray-500 text-xs'>{category}</div>
      <div>{title}</div>
      <div className='text-indigo-700'>Rs.{price}</div>
      <Link className="text-black" to={"/products/" + id}>
        View Detail
      </Link>
    </div>
  );
}

export default Product;