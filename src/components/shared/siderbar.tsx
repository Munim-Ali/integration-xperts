"use client";

import React from "react";
import Logo from "../../../public/images/logo.webp";
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
        className={`bg-white p-6 lg:p-6 transition-transform duration-300 lg:translate-x-0 fixed lg:relative top-0 left-0 h-full  w-full lg:w-[300px] 3xl:h-screen lg:flex lg:flex-col lg:justify-between z-50 ${
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
          <div className="w-full flex justify-center pb-8 ">
            <Image src={Logo} alt="logo" width={120} height={48} />
          </div>
          {SiderbarMenu.map((item) => (
            <Link
              href={item.link}
              className={`flex flex-row items-center justify-center py-4 px-3 cursor-pointer rounded-xl hover:bg-blue hover:text-white mb-2 ${
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
          className=" p-10 bg-cover bg-no-repeat bg-center rounded-2xl mt-8 "
          style={{ backgroundImage: `url(${GetProBg.src})` }}
        >
          <div className="w-full flex flex-col items-center justify-center">
            <Image src={Prologo} alt="pro-logo" />
            <p className="text-white opacity-80 text-[12px] font-medium mt-3 w-2/3 text-center leading-4">
              Get access to all features
            </p>
            <button className="bg-white rounded-md py-1 px-8 font-poppins text-blue font-semibold mt-8">
              Get Pro
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
