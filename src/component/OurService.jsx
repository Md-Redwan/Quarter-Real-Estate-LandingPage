import React from 'react'
import OurServiceImg1 from '../assets/OurServiceImg1.png'
import OurServiceImg2 from '../assets/OurServiceImg2.png'
import OurServiceImg3 from '../assets/OurServiceImg3.png'
import { FaArrowRightLong } from "react-icons/fa6";


const OurService = () => {
  return (
    <div className='bg-[#F8F7FC]'>
      <div className='container py-25'>
        <div className='text-center'>
          <h6 className="font-nunito font-bold py-1 px-6 bg-[#ee9d9d9c] text-[#FF5A3C] rounded-2xl inline">
              Our Services
          </h6>
          <h2 className='font-poppins font-bold text-5xl mt-4'>
            Our Main Focus
          </h2>
        </div>
        <div className='flex gap-7.5 justify-center mt-[35px]'>
          <div className='w-92.5 h-[437px] p-[39px] flex flex-col items-center bg-[#FFFFFF] shadow-box hover:border-b-4 border-[#FF5A3C]'>
            <img src={OurServiceImg1} alt="" />
            <h2 className='font-poppins font-bold text-[28px] mt-[17px]'>Buy a home</h2>
            <p className='font-nunito text-[#5C727D] text-center mt-2.5 mb-7'>
              over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
            </p>
            <button className='flex text-[#FF5A3C] items-center gap-1 font-nunito font-bold text-lg cursor-pointer'>
              Find A Home 
              <FaArrowRightLong/>
            </button>
          </div>
          <div className='w-92.5 h-[437px] p-[39px] flex flex-col items-center bg-[#FFFFFF] shadow-box hover:border-b-4 border-[#FF5A3C]'>
            <img src={OurServiceImg2} alt="" />
            <h2 className='font-poppins font-bold text-[28px] mt-[17px]'>Rent a home</h2>
            <p className='font-nunito text-[#5C727D] text-center mt-2.5 mb-7'>
              over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
            </p>
            <button className='flex text-[#FF5A3C] items-center gap-1 font-nunito font-bold text-lg cursor-pointer'>
              Find A Home 
              <FaArrowRightLong/>
            </button>
          </div>
          <div className='w-92.5 h-[437px] p-[39px] flex flex-col items-center bg-[#FFFFFF] shadow-box hover:border-b-4 border-[#FF5A3C]'>
            <img src={OurServiceImg3} alt="" />
            <h2 className='font-poppins font-bold text-[28px] mt-[17px]'>Sell a home</h2>
            <p className='font-nunito text-[#5C727D] text-center mt-2.5 mb-7'>
              over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
            </p>
            <button className='flex text-[#FF5A3C] items-center gap-1 font-nunito font-bold text-lg cursor-pointer'>
              Find A Home 
              <FaArrowRightLong/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurService
