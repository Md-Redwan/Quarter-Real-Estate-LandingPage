import React from 'react'
import Header from './Header'
import Logo from "../assets/logo.svg"
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";


const Navbar = () => {
  return (
    <div>
        <Header/>
        <div className='container flex justify-between'>
            <img src={Logo} alt="logo image" />
            <div className='flex items-center gap-10'>
              <ul className='navList flex items-center gap-8 font-nunito text-lg font-bold py-8'>
                <li>Home</li>
                <li>Properties</li>
                <li>Property</li>
                <li>Blog</li>
                <li>Pages</li>
                <li>Contact</li>
              </ul>
              <div className='flex gap-2'>
                <div className='w-[39px] h-[35px] shadow-box flex justify-center items-center cursor-pointer'>
                  <FaRegUser/>
                </div>
                <div className='w-[39px] h-[35px] shadow-box flex justify-center items-center cursor-pointer'>
                  <FaRegHeart/>
                </div>
                <div className='w-[39px] h-[35px] shadow-box flex justify-center items-center cursor-pointer'>
                  <IoSearch/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
