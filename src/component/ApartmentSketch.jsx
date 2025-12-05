import React from 'react'
import ApartmentSketchImg from "../assets/ApartmentSketchImg.png"


const ApartmentSketch = () => {
  return (
    <div className='container pb-[117px]'>
      <div className="text-center pb-9">
          <h6 className="font-nunito font-bold py-1 px-6 bg-[#ee9d9d9c] text-primary rounded-2xl inline">
            Apartment Sketch
          </h6>
          <h2 className="font-poppins font-bold text-5xl mt-4">
            Apartments Plan
          </h2>
        </div>
        <div>
          <ul className='flex gap-12.5 justify-center mt-7.5 font-nunito font-bold text-xl text-[#0A2C3D] '>
            <li className='hover:text-primary cursor-pointer'>The Studio</li>
            <li className='hover:text-primary cursor-pointer'>Deluxe Portion</li>
            <li className='hover:text-primary cursor-pointer'>Penthouse</li>
            <li className='hover:text-primary cursor-pointer'>Top Garden</li>
            <li className='hover:text-primary cursor-pointer'>Double Height</li>
          </ul>
        </div>
        <div className='flex justify-between items-center mt-[53px]'>
          <div className='w-[50%] bg-primary text-white p-18.5 font-poppins'>
            <h2 className='font-bold text-[30px]'>Deluxe Portion</h2>
            <p className='font-nunito mt-[15px]'>Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.</p>
            <div>
              <div className='flex justify-between items-center mt-11.5'>
                <h4 className='font-medium'>Total Area</h4>
                <div className='border border-dashed w-[217px] h-0'></div>
                <h5 className='font-nunito text-[15px]'>2800 Sq. Ft</h5>
              </div>
              <div className='flex justify-between items-center mt-11.5'>
                <h4 className='font-medium'>Bedroom</h4>
                <div className='border border-dashed w-[217px] h-0'></div>
                <h5 className='font-nunito text-[15px]'>150 Sq. Ft</h5>
              </div>
              <div className='flex justify-between items-center mt-11.5'>
                <h4 className='font-medium'>Bathroom</h4>
                <div className='border border-dashed w-[217px] h-0'></div>
                <h5 className='font-nunito text-[15px]'>45 Sq. Ft</h5>
              </div>
              <div className='flex justify-between items-center mt-11.5'>
                <h4 className='font-medium'>Smoking/Pets</h4>
                <div className='border border-dashed w-[217px] h-0'></div>
                <h5 className='font-nunito text-[15px]'>Allowed</h5>
              </div>
              <div className='flex justify-between items-center mt-11.5'>
                <h4 className='font-medium'>Lounge</h4>
                <div className='border border-dashed w-[217px] h-0'></div>
                <h5 className='font-nunito text-[15px]'>650 Sq. Ft</h5>
              </div>
            </div>
          </div>
          <div className='w-[50%]'>
            <img src={ApartmentSketchImg} alt="" />
          </div>
        </div>
    </div>
  )
}

export default ApartmentSketch
