import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropertiesCard from "./PropertiesCard";
import PropertiesImg1 from "../assets/PropertiesImg1.png";
import PropertiesImg5 from "../assets/PropertiesImg5.png";

const Properties = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: "linear",
     appendDots: dots => (
      <div>
        <ul className="w-50 h-1 flex justify-center items-center m-auto"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        className="w-2 h-2 rounded-full bg-[#ff593cb7] flex justify-center items-center gap-3"
      >
        {}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className=" pt-29.5 pb-29">
        <div className="container text-center pb-9">
          <h6 className="font-nunito font-bold py-1 px-6 bg-[#ee9d9d9c] text-primary rounded-2xl inline">
            Properties
          </h6>
          <h2 className="font-poppins font-bold text-5xl mt-4">
            Featured Listings
          </h2>
        </div>
        <div className="w-[90%] px-20 m-auto">
          <Slider {...settings}>
            <div className="px-2 pb-5">
              <PropertiesCard
                PropertiesImg={PropertiesImg1}
                PropertiesLocation="Belmont Gardens, Chicago"
                PropertiesPrice="349,00"
                PropertiesTitle="New Apartment Nice View"
                AgentImg={PropertiesImg5}
                AgentName="William Seklo"
              />
            </div>
            <div className="px-2">
              <PropertiesCard
                PropertiesImg={PropertiesImg1}
                PropertiesLocation="Belmont Gardens, Chicago"
                PropertiesPrice="349,00"
                PropertiesTitle="New Apartment Nice View"
                AgentImg={PropertiesImg5}
                AgentName="William Seklo"
              />
            </div>
            <div className="px-2">
              <PropertiesCard
                PropertiesImg={PropertiesImg1}
                PropertiesLocation="Belmont Gardens, Chicago"
                PropertiesPrice="349,00"
                PropertiesTitle="New Apartment Nice View"
                AgentImg={PropertiesImg5}
                AgentName="William Seklo"
              />
            </div>
            <div className="px-2">
              <PropertiesCard
                PropertiesImg={PropertiesImg1}
                PropertiesLocation="Belmont Gardens, Chicago"
                PropertiesPrice="349,00"
                PropertiesTitle="New Apartment Nice View"
                AgentImg={PropertiesImg5}
                AgentName="William Seklo"
              />
            </div>

            {/* Now this component for testing slider */}
            <div className="px-2">
              <PropertiesCard
                PropertiesImg={PropertiesImg1}
                PropertiesLocation="Belmont Gardens, Chicago"
                PropertiesPrice="349,00"
                PropertiesTitle="New Apartment Nice View"
                AgentImg={PropertiesImg5}
                AgentName="William Seklo"
              />
            </div>
            <div className="px-2">
              <PropertiesCard
                PropertiesImg={PropertiesImg1}
                PropertiesLocation="Belmont Gardens, Chicago"
                PropertiesPrice="349,00"
                PropertiesTitle="New Apartment Nice View"
                AgentImg={PropertiesImg5}
                AgentName="William Seklo"
              />
            </div>
            <div className="px-2">
              <PropertiesCard
                PropertiesImg={PropertiesImg1}
                PropertiesLocation="Belmont Gardens, Chicago"
                PropertiesPrice="349,00"
                PropertiesTitle="New Apartment Nice View"
                AgentImg={PropertiesImg5}
                AgentName="William Seklo"
              />
            </div>
            <div className="px-2">
              <PropertiesCard
                PropertiesImg={PropertiesImg1}
                PropertiesLocation="Belmont Gardens, Chicago"
                PropertiesPrice="349,00"
                PropertiesTitle="New Apartment Nice View"
                AgentImg={PropertiesImg5}
                AgentName="William Seklo"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Properties;
