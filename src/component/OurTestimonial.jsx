import React from "react";
import PropertiesImg5 from "../assets/PropertiesImg5.png";
import PropertiesImg6 from "../assets/PropertiesImg6.png";
import PropertiesImg7 from "../assets/PropertiesImg7.png";
import OurTestimonialCard from "./OurTestimonialCard";

const OurTestimonial = () => {
  return (
    <div className="bg-[#F8F7FC] py-24">
      <div className="container">
        <div className="text-center pb-9">
          <h6 className="font-nunito font-bold py-1 px-6 bg-[#ee9d9d9c] text-primary rounded-2xl inline">
            Our Testimonial
          </h6>
          <h2 className="font-poppins font-bold text-5xl mt-4">
            Clients Feedback
          </h2>
        </div>
        <div className="flex gap-7.5 justify-center">
         <OurTestimonialCard ClientImage={PropertiesImg5}/>
         <OurTestimonialCard ClientImage={PropertiesImg6}/>
         <OurTestimonialCard ClientImage={PropertiesImg7}/>
        </div>
      </div>
    </div>
  );
};

export default OurTestimonial;
