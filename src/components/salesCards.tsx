import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  number: string;
  description: string;
  pnl: number;
  bgColor: string;
};

const SalesCards = ({ image, number, description, pnl, bgColor }: Props) => {
  return (
    <>
      <div
        className={`w-full md:w-[47%] xl:w-[22%] ${bgColor} rounded-lg p-3 mb-2`}
      >
        <Image src={image} width={32} height={32} alt="sales icon" />
        <h3 className="text-[20px] font-semibold text-[#151D48] mt-4 ">
          {number}
        </h3>
        <p className="text-[14px] text-[#425166] font-medium mt-1">
          {description}
        </p>
        <p className="text-[10px] text-[#4079ED] font-medium mt-2">
          +{pnl}% from yesterday
        </p>
      </div>
    </>
  );
};

export default SalesCards;
