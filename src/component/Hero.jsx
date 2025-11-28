import React from "react";
import HeroImg from "../assets/HeroImg.png";
import { IoHome } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="bg-[#F2F6F7]">
      <div className="container flex justify-between pt-23.5">
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
          <div className="mt-6.5">
            <button className="py-3 px-6 bg-[#FF5A3C] text-white cursor-pointer">
              View Properties
            </button>

          </div>
        </div>
        <div>
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
