import React from 'react'

const NewsAndBlogs = () => {
  return (
    <div className='container pt-12'>
      <div className="text-center pb-9">
          <h6 className="font-nunito font-bold py-1 px-6 bg-[#ee9d9d9c] text-primary rounded-2xl inline">
            News & Blogs
          </h6>
          <h2 className="font-poppins font-bold text-5xl mt-4">
            See Our Leatest News <br /> & Read Blogs
          </h2>
        </div>
        <div className='flex gap-7.5 justify-center'>
            <div className='w-[33%] flex flex-col gap-7.5'>
                <div className="NewsAndBlogs-BgImg1 w-[370px] "></div>
                <div></div>
            </div>
            <div className='w-[33%]'></div>
            <div className='w-[33%]'></div>
        </div>
    </div>
  )
}

export default NewsAndBlogs
