import React from 'react';
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";

// Navbar menu items
const navbarMenu = [
  { id: 1, title: 'Home', path: '#home' },
  { id: 2, title: 'Contact', path: '#contact' },
  { id: 3, title: 'About', path: '#about' },
  { id: 4, title: 'Sign Up', path: '#signup' }
];

const Navbar = () => {
  return (
    <section>
      <div className=''>
        {/* Upper bar for promotional message */}
        <div className="flex justify-center mt-1 px-2">
          <div className="bg-primary1 text-secondary text-[14px] p-2 flex justify-between items-center w-full max-w-[1170px]">
            
            {/* Centered promotional text */}
            <div className="flex flex-grow justify-center items-center text-center">
              <span>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
              </span>
              <a href="#" className="font-semibold underline ml-2">
                Shop Now
              </a>
            </div>
            
            {/* Language selection section */}
            <div className="flex items-center ml-4">
              <div className="w-4 h-4 bg-white border border-gray-300 mr-2"></div>
              <p>English</p>
            </div>
          </div>
        </div>

        {/* Lower bar for logo and navigation */}
        <div className="container max-w-[1170px] py-5 flex justify-between items-center">
          
          {/* Logo section */}
          <div className="logo">
            <a href="#" className="uppercase font-bold text-[24px]">
              Exclusive
            </a>
          </div>
          
          {/* Navigation and Search area */}
          <div className="flex items-center gap-8">

            {/* Navigation Links (hidden on small screens) */}
            <div className="max-w-[367px] hidden md:block">
              <ul className="flex items-center gap-4">
                {navbarMenu.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.path}
                      className="inline-block text-[16px] py-2 px-3 hover:text-gray-500"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-[300px]">
                <div className="bg-secondary rounded-[4px] p-1 flex items-center relative">
                  <input 
                    type="text" 
                    placeholder="Search " 
                    className="w-full outline-none px-3 py-2 text-[12px] text-secondary bg-transparent" 
                  />
                  {/* Search icon with adjusted size for better alignment */}
                  <CiSearch className="text-Text2 absolute right-3 top-1/2 transform -translate-y-1/2 text-lg" />
                </div>
              </div>

            {/* Icons for favorites and cart */}
            <div className="max-w-[267px] flex items-center gap-4">
              <CiHeart className="text-2xl" />
              <FaCartShopping className="text-2xl" />
            </div>
          </div>
        </div>
            <div className="my-1">
      <div className="border-t color-button border-gray-300 w-full"></div>
            </div>

      </div>
    </section>
  );
}

export default Navbar;
