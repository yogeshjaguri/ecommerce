import React from 'react';
import {RiShoppingBagLine} from "react-icons/ri"; 
import { Link } from 'react-router-dom';

function NavBar({productCount}) {
  return (
    <div className='py-4 bg-white'>
        <div className='max-w-6xl flex justify-between mx-auto items-center'>
          
            <div>
            <img
            className='h-16'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmwriweyOrBwrD466a77L2EEnpk85WVIPWRdR56BQ&s"
            />
            </div>
            

            <div className='flex flex-col items-centre'>
            
            <div>
            <RiShoppingBagLine className="text-4xl text-primary-default" />
            </div>
            
            <span>{productCount}</span>
            </div>

        </div>
    </div>
  );
};

export default NavBar