import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import footerLogo from "../assets/footerLogo.png";
import { IoLocationOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <section className="bg-[#171B2A]">
      <div className="container relative">
        <div className=" bg-primary text-white py-[22.5px] px-15 flex justify-between absolute -top-19 right-0 left-0">
          <div>
            <h1 className="font-poppins font-bold text-4xl">
              looking for a dream home?
            </h1>
            <p className="font-nunito text-lg mt-3">
              We help you make the dream of new house a reality
            </p>
          </div>
          <div className="flex items-center">
            <button className="py-5 px-8 text-primary flex gap-1 items-center bg-white cursor-pointer">
              Explore Properties
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="flex justify-between pt-[222px] text-white">
          <div className="w-[310px]">
            <h4 className="font-poppins font-bold text-xl mb-6">About Us.</h4>
            <p className="font-nunito">
              orporate clients and leisure travelers has been relying on
              Groundlink for dependable safe, and professional chauffeured car
              service in major cities across World. Indeed it has been more than
              one decade and five years that Groundlink
            </p>
            <div className="flex items-center gap-2.5 mt-7">
              <div className="w-11 h-11 rounded-full bg-white text-black hover:bg-primary hover:text-white flex items-center justify-center cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="w-11 h-11 rounded-full bg-white text-black hover:bg-primary hover:text-white flex items-center justify-center cursor-pointer">
                <FaTwitter />
              </div>
              <div className="w-11 h-11 rounded-full bg-white text-black hover:bg-primary hover:text-white flex items-center justify-center cursor-pointer">
                <FaInstagram />
              </div>
              <div className="w-11 h-11 rounded-full bg-white text-black hover:bg-primary hover:text-white flex items-center justify-center cursor-pointer">
                <FaPinterestP />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-poppins font-bold text-lg">Useful Links</h4>
            <ul className="font-nunito flex flex-col gap-4.5 mt-6">
              <li>About</li>
              <li>News</li>
              <li>Partners</li>
              <li>Room Details</li>
              <li>Gallery</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-poppins font-bold text-lg">Help?</h4>
            <ul className="font-nunito flex flex-col gap-4.5 mt-6">
              <li>FAQ</li>
              <li>Term & conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="w-80 font-nunito ">
            <img src={footerLogo} alt="Footer Logo" />
            <p className="mt-[17px]">
              We are a team of designers and developers create high quality
              Magento, Prestashop,
            </p>
            <div className="flex items-center gap-4 mt-6">
              <IoLocationOutline />
              <h5>254 Lillian Blvd, Holbrook</h5>
            </div>

            <form className="bg-white text-[#42518B] py-1.5 flex items-center justify-between pl-[17px] pr-1.5 mt-7.5">
                <input type="email" placeholder="Enter email address" className="" />
                <button className="bg-primary text-white rounded-sm py-2.5 px-5.5 cursor-pointer">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#313441] mt-30">
        <div className="container flex justify-between items-center py-7">
          <h5 className="font-nunito text-white">
            © TunaThemes 2021 All rights reserved.
          </h5>
          <h5 className="font-nunito text-white">
            Terms of Use | Privacy Policy
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Footer;
