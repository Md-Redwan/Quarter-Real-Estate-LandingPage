import React from "react";
import ClientSectionIcon from "../assets/ClientSectionIcon.svg";

const OurTestimonialCard = ({
  ClientImage,
  ClientName = "Lee Barners",
  ClientTitle = "SELLING AGENTING",
}) => {
  return (
    <div className="w-[370px] h-[388px] bg-white shadow-lg px-9 py-14.5 rounded-md">
      <img src={ClientSectionIcon} alt="" className="inline" />
      <p className="inline font-nunito text-lg text-[#5C727D]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus a
        ratione alias eos facere inventore delectus, laborum illo nesciunt
        repellat repudiandae dolorem eum, corrupti quam id, non nihil doloribus!
      </p>
      <div className="flex gap-[15px] mt-5">
        <img src={ClientImage} alt="" className="w-15.5 h-15.5" />

        <div>
          <h5 className="font-poppins font-bold text-lg">{ClientName}</h5>
          <p className="font-nunito text-sm">{ClientTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default OurTestimonialCard;
