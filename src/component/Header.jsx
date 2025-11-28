import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#0a2c3d] text-white">
      <div className="font-nunito container flex justify-between ">
        <div className="flex items-center gap-5 py-4 font-nunito">
          <p className="flex items-center gap-2 text-sm">
            <IoLocationOutline className="text-[17px]"/>
            254 Lillian Blvd, Holbrook
          </p>
          <p className="flex items-center gap-2 text-sm">
            <IoMailOutline className="text-[17px]"/>
            info@santizex-site.com
          </p>
        </div>
        <div className="flex items-center gap-4.5">
          <div className="flex gap-2.5">
            <FaFacebookF className="cursor-pointer"/>
            <FaTwitter className="cursor-pointer"/>
            <FaInstagram className="cursor-pointer"/>
          </div>
          <div className="bg-[#FF5A3C] py-4 px-6.5 cursor-pointer font-poppins text-sm">
            <h4>Add Listings</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
