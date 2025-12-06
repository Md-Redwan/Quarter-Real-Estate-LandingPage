import React from "react";
import { GrCar } from "react-icons/gr";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { MdSecurity } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { IoLibraryOutline } from "react-icons/io5";
import { LuBedDouble } from "react-icons/lu";
import { BsHouseCheck } from "react-icons/bs";
import { TbPlayFootball } from "react-icons/tb";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import FeaturedListingsCard from "./FeaturedListingsCard";

const FeaturedListings = () => {
  return (
    <div className="container pb-25">
      <div className="text-center pb-9">
        <h6 className="font-nunito font-bold py-1 px-6 bg-[#ee9d9d9c] text-primary rounded-2xl inline">
          Properties
        </h6>
        <h2 className="font-poppins font-bold text-5xl mt-4">
          Featured Listings
        </h2>
      </div>
      <div className="flex flex-wrap gap-7.5 justify-center">
        <FeaturedListingsCard CardIcon={<GrCar />} CardName="Parking Space" />
        <FeaturedListingsCard CardIcon={<LiaSwimmingPoolSolid />} CardName="Swimming Pool" />
        <FeaturedListingsCard CardIcon={<MdSecurity />} CardName="Privat Security" />
        <FeaturedListingsCard CardIcon={<FaUserDoctor />} CardName="Medical Center" />
        <FeaturedListingsCard CardIcon={<IoLibraryOutline />} CardName="Library Area" />
        <FeaturedListingsCard CardIcon={<LuBedDouble />} CardName="King Size Beds" />
        <FeaturedListingsCard CardIcon={<BsHouseCheck />} CardName="Smart Homes" />
        <FeaturedListingsCard CardIcon={<TbPlayFootball />} CardName="Kid’s Playland" />
      </div>
    </div>
  );
};

export default FeaturedListings;
