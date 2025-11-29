import React from "react";
import HeroImg from "../assets/HeroImg.png";
import FilterImg from "../assets/filter.svg";
import { IoHome } from "react-icons/io5";
import { IoIosPlay } from "react-icons/io";

const Hero = () => {
  return (
    <div className="bg-[#F2F6F7] mb-52">
      <div className="container flex justify-between pt-23.5 pb-43 relative">
        <div>
          <p className="font-nunito flex gap-1 items-center mt-34.5">
            <IoHome className="text-[#FF5A3C]" />
            Real Estate Agency
          </p>
          <h1 className="font-poppins font-bold text-6xl my-6">
            Find Your Dream <br /> House By Us
          </h1>
          <p className="font-nunito text-[#5C727D]">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </p>
          <div className="mt-6.5 flex gap-6">
            <div>
              <button className="py-3 px-6 bg-[#FF5A3C] text-white cursor-pointer">
              View Properties
            </button>
            </div>
            <div className="py-2.5 px-2.5 bg-[#FFFFFF] rounded-full  cursor-pointer text-[#FF5A3C] text-[30px] shadow-box">
              <IoIosPlay />
            </div>
          </div>
        </div>
        <div>
          <img src={HeroImg} alt="" />
        </div>
        <div className="container h-33 bg-white shadow-lg absolute bottom-[-47px] font-nunito font-bold text-[15px] text-[#5C5B7B] flex justify-around items-center rounded-lg">
          <select name="" id="" className="w-66.5 px-3 py-3 border rounded-md hover:border-[#FF5A3C]">
            <option value="">Choose Area</option>
            <option value="">Canada</option>
            <option value="">London</option>
            <option value="">New York</option>
            <option value="">United Status</option>
          </select>
          <select name="" id="" className="w-66.5 px-3 py-3 border rounded-md hover:border-[#FF5A3C]">
            <option value="">Property Status</option>
            <option value="">Open House</option>
            <option value="">Rent</option>
            <option value="">Sale</option>
            <option value="">Sold</option>
          </select>
          <select name="" id="" className="w-66.5 px-3 py-3 border rounded-md hover:border-[#FF5A3C]">
            <option value="">Property Type</option>
            <option value="">Apartment</option>
            <option value="">Co-Op</option>
            <option value="">Condo</option>
            <option value="">Single Family Home</option>
          </select>
          <img src={FilterImg} alt="" className="cursor-pointer"/>
          <button className="py-4 px-14 bg-[#FF5A3C] text-white font-poppins font-medium text-sm cursor-pointer">FIND NOW</button>
      </div>
      </div>
      
    </div>
  );
};

export default Hero;
