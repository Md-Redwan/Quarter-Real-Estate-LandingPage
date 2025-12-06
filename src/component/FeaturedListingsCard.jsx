import React from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";


const FeaturedListingsCard = ({CardIcon,CardName}) => {
  return (
    <div className=" w-67.5 h-[249px] relative">
     <div className="w-67.5 h-58 shadow-box rounded-lg flex flex-col justify-center items-center gap-4  hover:bg-primary hover:text-white">
        <div className="bg-[#fee5e2] w-25 h-25 rounded-full flex justify-center items-center text-4xl text-primary">
          {CardIcon}
        </div>
        <h2 className="font-poppins font-bold text-[22px] pb-[45px]">
          {CardName}
        </h2>
      </div>
        <div className="w-10.5 h-10.5 rounded-full shadow-box flex justify-center items-center absolute -bottom-1.5 bg-white left-[50%] translate-x-[-50%] cursor-pointer hover:text-primary">
            <HiMiniArrowLongRight/>
        </div>
    </div>
  );
};

export default FeaturedListingsCard;
