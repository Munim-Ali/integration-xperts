"use client";

import React from "react";
import GetProBg from "../../../public/images/getpro-bg.webp";
import Prologo from "../../../public/images/pro-logo.png";
import Close from "../../../public/images/siderbar-icons/close.svg";
import Image from "next/image";
import { SiderbarMenu } from "@/routes/siderbarRoutes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "../siderbarContext";

const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <>
      <div
        className={`bg-white p-6 lg:pb-20  lg:p-6 transition-transform duration-300 lg:translate-x-0 fixed overflow-y-auto md:top-20  xl:top-16 left-0 h-full  w-full lg:w-[270px] 3xl:h-screen lg:flex lg:flex-col lg:justify-between z-10  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full relative">
          <Image
            src={Close}
            width={32}
            height={32}
            alt="close siderbar"
            onClick={toggleSidebar}
            className="block lg:hidden absolute top-0 left-0"
          />

          {SiderbarMenu.map((item) => (
            <Link
              href={item.link}
              className={`flex flex-row items-center justify-center py-4 pr-2 cursor-pointer rounded-xl hover:bg-blue hover:text-white mb-2 ${
                pathname === item.link
                  ? "bg-blue text-[#fff] font-semibold"
                  : "text-gray"
              }`}
              key={item.name}
            >
              <div className="w-1/3 flex items-center justify-center">
                <Image
                  src={item.image}
                  width={24}
                  height={24}
                  alt={item.name}
                />
              </div>
              <div className="w-2/3 flex items-center justify-start">
                <p className=" text-[16px]  ml-3">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <div
          className="py-10 px-4  lg:p-10 bg-cover bg-no-repeat bg-center rounded-2xl mt-8 "
          style={{ backgroundImage: `url(${GetProBg.src})` }}
        >
          <div className="flex flex-row lg:flex-col items-center justify-between ">
            <div className="w-full flex flex-col  items-center justify-center">
              <Image src={Prologo} alt="pro-logo" />
              <p className="text-white opacity-80 text-[12px] font-medium mt-3 w-2/3 text-center leading-4">
                Get access to all features
              </p>
            </div>
            <button className="w-full bg-white rounded-md py-2 px-8 font-poppins text-blue font-semibold lg:mt-8">
              Get Pro
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
