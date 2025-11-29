import React from "react";
import CounterImg1 from "../assets/CounterImg1.svg";
import CounterImg2 from "../assets/CounterImg2.svg";
import CounterImg3 from "../assets/CounterImg3.svg";
import CounterImg4 from "../assets/CounterImg4.svg";
import CounterNumber from "./CounterNumber";

const Counter = () => {
  return (
    <div className="bg-[#F6F5FC] my-29.5">
      <div className="container flex justify-evenly">
        <div className="w-73 h-[334px]  flex flex-col justify-center items-center text-center gap-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:shadow-lg">
            <div>
                <img src={CounterImg1} alt="" />
            </div>
            <div>
                <h2 className="font-poppins font-bold text-[42px]"><CounterNumber values={[560]} /></h2>
                <h4 className="font-nunito font-bold text-xl text-[#5C727D]">Total Area Sq</h4>
            </div>
        </div>
        <div className="w-73 h-[334px]  flex flex-col justify-center items-center text-center gap-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:shadow-lg">
            <div>
                <img src={CounterImg2} alt="" />
            </div>
            <div>
                <h2 className="font-poppins font-bold text-[42px]"><CounterNumber values={[197]} /></h2>
                <h4 className="font-nunito font-bold text-xl text-[#5C727D]">Apartments Sold</h4>
            </div>
        </div>
        <div className="w-73 h-[334px]  flex flex-col justify-center items-center text-center gap-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:shadow-lg">
            <div>
                <img src={CounterImg3} alt="" />
            </div>
            <div>
                <h2 className="font-poppins font-bold text-[42px]"><CounterNumber values={[268]} /></h2>
                <h4 className="font-nunito font-bold text-xl text-[#5C727D]">Total Constructions</h4>
            </div>
        </div>
        <div className="w-73 h-[334px]  flex flex-col justify-center items-center text-center gap-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:shadow-lg">
            <div>
                <img src={CounterImg4} alt="" />
            </div>
            <div>
                <h2 className="font-poppins font-bold text-[42px]"><CounterNumber values={[340]} /></h2>
                <h4 className="font-nunito font-bold text-xl text-[#5C727D]">Apartio Rooms</h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
