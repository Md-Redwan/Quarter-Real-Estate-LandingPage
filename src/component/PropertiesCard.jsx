import React from "react";
import { MdLocationOn } from "react-icons/md";
import { IoCamera } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoPlusCircle } from "react-icons/go";



import AboutUsImg7 from "../assets/aboutUsImg7.svg";
import AboutUsImg8 from "../assets/aboutUsImg8.svg";
import AboutUsImg10 from "../assets/aboutUsImg10.svg";

const PropertiesCard = ({PropertiesImg, PropertiesLocation, PropertiesPrice ="349", PropertiesTitle, AgentImg, AgentName}) => {
  return (
    <div className="w-[427px] h-[611px] shadow-lg">
      <div className="relative">
        <img src={PropertiesImg} alt="" />
        <h5
          className="py-1 px-4 bg-[#77C720] font-poppins font-medium text-[12px] absolute top-2.5 right-2.5 text-white
        "
        >
          FOR RENT
        </h5>
        <div className="px-6 py-2 flex gap-[135.95px] items-center absolute bottom-0 right-0 left-0 text-white bg-[#00000072]">
          <div className="flex items-start">
            <MdLocationOn className="text-lg" />
            <p className="font-nunito text-sm">{PropertiesLocation}</p>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <IoCamera className="cursor-pointer" />
            <MdOndemandVideo className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="px-6 mt-[23px] font-poppins">
        <h4 className="text-primary font-medium text-lg ">
          $ {PropertiesPrice} <span className="text-[12px]">/Month</span>
        </h4>
        <h3 className="font-bold text-[22px] mt-1.5 mb-[9px]">
          {PropertiesTitle}
        </h3>
        <p className="font-nunito text-[#5C727D] text-[13px]">
          Beautiful Huge 1 Family House In Heart Of <br /> Westbury. Newly
          Renovated With New Wood
        </p>
        
          <div className="mt-6 mb-[21px] flex gap-2.5">
            <div className="w-21.5 h-11.5 text-[#0A2C3D]">
              <div className="flex gap-1 ">
                <h4 className="font-poppins font-medium">3</h4>
                <img src={AboutUsImg7} alt="" />
              </div>
              <h6 className="font-nunito font-bold text-sm mt-1.5">
                Beedrooms
              </h6>
            </div>
            <div className="w-21.5 h-11.5 text-[#0A2C3D] border-l px-1 border-[#707070]">
              <div className="flex gap-1 ">
                <h4 className="font-poppins font-medium">2</h4>
                <img src={AboutUsImg8} alt="" />
              </div>
              <h6 className="font-nunito font-bold text-sm mt-1.5">
                Beedrooms
              </h6>
            </div>
           
            <div className="w-21.5 h-11.5 text-[#0A2C3D] px-1 border-l border-[#707070]">
              <div className="flex gap-1 ">
                <h4 className="font-poppins font-medium">3450</h4>
                <img src={AboutUsImg10} alt="" />
              </div>
              <h6 className="font-nunito font-bold text-sm mt-1.5">Squre Ft</h6>
            </div>
          </div>
        
      </div>
      <div className="border-t border-[#C1C1C1]">
        <div className="px-6 pt-4 pb-6 flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <img src={AgentImg} alt="" />
            <div>
              <h2 className="font-poppins font-medium text-sm">{AgentName}</h2>
              <p className="font-nunito text-[9px] text-[#5C727D]">Estate Agents</p>
            </div>
          </div>
          <div className="flex gap-[11px]">
            <div className="w-6.5 h-[23px] bg-[#EDEDED] rounded-xs flex justify-center items-center hover:bg-primary hover:text-white cursor-pointer">
              <AiOutlineExpandAlt/>
            </div>
            <div className="w-6.5 h-[23px] bg-[#EDEDED] rounded-xs flex justify-center items-center hover:bg-primary hover:text-white cursor-pointer">
              <IoMdHeartEmpty/>
            </div>
            <div className="w-6.5 h-[23px] bg-[#EDEDED] rounded-xs flex justify-center items-center hover:bg-primary hover:text-white cursor-pointer">
              <GoPlusCircle/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
