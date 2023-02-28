import React from 'react';
import {RiShoppingBagLine} from "react-icons/ri"; 

function NavBar(productCount) {
  return (
    <div className='py-4 bg-white'>
        <div className='max-w-6xl flex justify-between mx-auto items-center'>
            <img
            className='h-16'
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/
            // Amazon_logo.svg/1200px-Amazon_logo.svg.png"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmwriweyOrBwrD466a77L2EEnpk85WVIPWRdR56BQ&s"
            />
            <div className='flex flex-col items-centre'>
            <RiShoppingBagLine className="text-4xl text-primary-default" />
            <span>{productCount}</span>
            </div>
        </div>
    </div>
  );
};

export default NavBar