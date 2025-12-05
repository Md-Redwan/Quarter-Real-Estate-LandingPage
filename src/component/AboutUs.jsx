import React from "react";
import AboutUsImg1 from "../assets/aboutUsImg1.png";
import AboutUsImg2 from "../assets/aboutUsImg2.png";
import AboutUsImg3 from "../assets/aboutUsImg3.png";
import AboutUsImg4 from "../assets/aboutUsImg4.png";
import AboutUsImg5 from "../assets/aboutUsImg5.png";
import AboutUsImg6 from "../assets/aboutUsImg6.png";
import AboutUsImg7 from "../assets/aboutUsImg7.svg";
import AboutUsImg8 from "../assets/aboutUsImg8.svg";
import AboutUsImg9 from "../assets/aboutUsImg9.svg";
import AboutUsImg10 from "../assets/aboutUsImg10.svg";
import AboutUsImg11 from "../assets/aboutUsImg11.jpg";
import AboutUsImg12 from "../assets/aboutUsImg12.jpg";
import AboutUsImg13 from "../assets/aboutUsImg13.jpg";


import Counter from "./Counter";

const AboutUs = () => {
  return (
    <div>
      <div className="container flex justify-between">
        <div className="w-[40%]">
          <img src={AboutUsImg1} alt="" />
        </div>
        <div className="w-[50%]">
          <div className="mt-14">
            <h6 className="font-nunito font-bold py-1 px-6 bg-[#ee9d9d9c] text-primary rounded-2xl inline">
              About Us
            </h6>
            <h2 className="font-poppins font-bold text-[44px] mt-4">
                The Leading Real Estate <br /> Rental Marketplace
            </h2>
            <p className="font-nunito text-[#5C727D] pt-5 pb-8">
                Over 39,000 people work for us in more than 70 countries all over the <br /> This breadth of global coverage, combined with specialist services
            </p>
            <div className="flex flex-wrap gap-6 text-[#0A2C3D] font-bold">
                <div className="w-[250px] h-[42px] flex items-center gap-2.5">
                    <div>
                        <img src={AboutUsImg2} alt="" />
                    </div>
                    <h4>Smart Home Design</h4>
                </div>
                <div className="w-[250px] h-[42px] flex items-center gap-2.5">
                    <div>
                        <img src={AboutUsImg3} alt="" />
                    </div>
                    <h4>Beautiful Scene Around</h4>
                </div>
                <div className="w-[250px] h-[42px] flex items-center gap-3">
                    <div className="ml-2">
                        <img src={AboutUsImg4} alt="" />
                    </div>
                    <h4>Exceptional Lifestyle</h4>
                </div>
                <div className="w-[250px] h-[42px] flex items-center gap-2.5">
                    <div>
                        <img src={AboutUsImg5} alt="" />
                    </div>
                    <h4>Complete 24/7 Security</h4>
                </div>
            </div>
            <div className="w-[506px] h-[85px] border-l-4 p-4 border-primary text-[#5C727D] font-nunito bg-[#f2cdc6cc] my-[33px]">
                <p>
                    "Enimad minim veniam quis nostrud exercitation <br /> llamco laboris. Lorem ipsum dolor sit amet"
                </p>
            </div>
            <button className="py-[13px] px-9.5 bg-primary text-white cursor-pointer">Know More</button>
          </div>
        </div>
      </div>
      <Counter/>
      <div className="container flex justify-evenly pb-29.5">
        <div>
            <h6 className="font-nunito font-bold py-1 px-6 bg-[#ee9d9d9c] text-primary rounded-2xl inline">
              About Us
            </h6>
            <h2 className="font-poppins font-bold text-[44px] mt-[17px]">
              Today Sells Properties
            </h2>
            <p className="font-nunito text-[#5C727D] mt-2.5">
              Houzez allow you to design unlimited panels and real estate custom <br /> forms to capture leads and keep record of all information
            </p>
            <div className="font-nunito font-bold text-[#0A2C3D] mt-[25px] flex flex-col gap-4.5">
              <p>
                <span className="text-primary">-</span>
                Live Music Cocerts at Luviana
              </p>
              <p>
                <span className="text-primary">-</span>
                Our SecretIsland Boat Tour is Just for You
              </p>
              <p>
                <span className="text-primary">-</span>
                Live Music Cocerts at Luviana
              </p>
              <p>
                <span className="text-primary">-</span>
                Live Music Cocerts at Luviana
              </p>
            </div>
            <div className="mt-7.5 flex gap-2.5">
              <div className="w-21.5 h-11.5 text-[#0A2C3D]">
                <div className="flex gap-1 ">
                  <h4 className="font-poppins font-medium">3</h4>
                  <img src={AboutUsImg7} alt="" />
                </div>
                <h6 className="font-nunito font-bold text-sm mt-1.5">Beedrooms</h6>
              </div>
              <div className="w-21.5 h-11.5 text-[#0A2C3D] border-l px-1 border-[#707070]">
                <div className="flex gap-1 ">
                  <h4 className="font-poppins font-medium">2</h4>
                  <img src={AboutUsImg8} alt="" />
                </div>
                <h6 className="font-nunito font-bold text-sm mt-1.5">Beedrooms</h6>
              </div>
              <div className="w-21.5 h-11.5 text-[#0A2C3D] px-1 border-l border-[#707070]">
                <div className="flex gap-1 ">
                  <h4 className="font-poppins font-medium">2</h4>
                  <img src={AboutUsImg9} alt="" />
                </div>
                <h6 className="font-nunito font-bold text-sm mt-1.5">Car Parking</h6>
              </div>
              <div className="w-21.5 h-11.5 text-[#0A2C3D] px-1 border-l border-[#707070]">
                <div className="flex gap-1 ">
                  <h4 className="font-poppins font-medium">3450</h4>
                  <img src={AboutUsImg10} alt="" />
                </div>
                <h6 className="font-nunito font-bold text-sm mt-1.5">Squre Ft</h6>
              </div>
            </div>
            <div className="flex gap-3.5 mt-9">
              <img src={AboutUsImg11} alt="" className="w-[150px] h-[116px] rounded-lg border-[6px] border-white shadow"/>
              <img src={AboutUsImg12} alt="" className="w-[150px] h-[116px] rounded-lg border-[6px] border-white shadow"/>
              <img src={AboutUsImg13} alt="" className="w-[150px] h-[116px] rounded-lg border-[6px] border-white shadow"/>
            </div>
        </div>
        <div>
          <img src={AboutUsImg6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
