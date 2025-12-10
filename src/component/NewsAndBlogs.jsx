import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";


const NewsAndBlogs = () => {
  return (
    <div className='container pt-12 pb-48'>
      <div className="text-center pb-9">
          <h6 className="font-nunito font-bold py-1 px-6 bg-[#ee9d9d9c] text-primary rounded-2xl inline">
            News & Blogs
          </h6>
          <h2 className="font-poppins font-bold text-5xl mt-4 leading-16">
            See Our Leatest News <br /> & Read Blogs
          </h2>
        </div>
        <div className='flex gap-7.5 justify-center text-white font-nunito'>
            <div className='w-[370px] flex flex-col gap-7.5 '>
                <div className="NewsAndBlogs-BgImg1 pt-24 pl-6.5">
                  <div className='flex items-center gap-2.5'>
                    <p className='font-bold text-[15px]'>Product Design</p>
                    <div className='w-[105px] h-[35px] rounded-full bg-white text-black text-xs font-bold flex justify-center items-center'>
                      <p>02 sep 2025</p>
                    </div>
                  </div>
                  <p className='font-poppins font-bold text-xl mt-3.5'>This consumer-focused <br /> blog gives clients</p>
                  <h5 className='font-bold flex items-center gap-1.5 mt-2 cursor-pointer'>Read More <IoIosArrowDroprightCircle /></h5>
                </div>
                <div className="NewsAndBlogs-BgImg2 pt-24 pl-6.5">
                  <div className='flex items-center gap-2.5'>
                    <p className='font-bold text-[15px]'>Product Design</p>
                    <div className='w-[105px] h-[35px] rounded-full bg-white text-black text-xs font-bold flex justify-center items-center'>
                      <p>02 sep 2025</p>
                    </div>
                  </div>
                  <p className='font-poppins font-bold text-xl mt-3.5'>This consumer-focused <br /> blog gives clients</p>
                  <h5 className='font-bold flex items-center gap-1.5 mt-2 cursor-pointer'>Read More <IoIosArrowDroprightCircle /></h5>
                </div>
            </div>
            <div className='w-[370px] NewsAndBlogs-BgImg3 pt-[359px] pl-7'>
              <div className='flex items-center gap-2.5'>
                    <p className='font-bold text-[15px]'>Web Developer</p>
                    <div className='w-[105px] h-[35px] rounded-full bg-white text-black text-xs font-bold flex justify-center items-center'>
                      <p>02 sep 2025</p>
                    </div>
                  </div>
                  <p className='font-poppins font-bold text-xl mt-3'>Have an ear to the ground <br /> on what real estate invest</p>
                  <h5 className='font-bold flex items-center gap-1.5 mt-2 cursor-pointer'>Read More <IoIosArrowDroprightCircle /></h5>
            </div>
            <div className='w-[370px] NewsAndBlogs-BgImg4 pt-[359px] pl-7'>
              <div className='flex items-center gap-2.5'>
                    <p className='font-bold text-[15px]'>Estate Agencie</p>
                    <div className='w-[105px] h-[35px] rounded-full bg-white text-black text-xs font-bold flex justify-center items-center'>
                      <p>02 sep 2025</p>
                    </div>
                  </div>
                  <p className='font-poppins font-bold text-xl mt-3'>appraisal skills and real <br /> estate career? McKissock</p>
                  <h5 className='font-bold flex items-center gap-1.5 mt-2 cursor-pointer'>Read More <IoIosArrowDroprightCircle /></h5>
            </div>
        </div>
    </div>
  )
}

export default NewsAndBlogs
