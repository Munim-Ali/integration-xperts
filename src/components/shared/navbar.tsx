"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../../../public/images/logo.webp";
import toggle from "../../../public/images/siderbar-icons/toggle.svg";
import Magnifier from "../../../public/images/siderbar-icons/magnifier.svg";
import Notification from "../../../public/images/siderbar-icons/notification.svg";
import Profile from "../../../public/images/siderbar-icons/profile.png";
import LanguageSelector from "../languageSelector";
import { useSidebar } from "../siderbarContext";

const Navbar = () => {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();
  const displayPath =
    pathname === "/" ? "Dashboard" : pathname.replace("/", "");

  return (
    <>
      <div className="w-full bg-white flex items-center justify-between py-3 px-4 lg:px-8">
        <div className="w-1/4 flex items-center justify-start">
          <Image
            src={toggle}
            alt="toggle"
            width={28}
            height={28}
            className="block lg:hidden"
            onClick={toggleSidebar}
          />
          <Image
            src={Logo}
            alt="logo"
            width={100}
            height={28}
            className="block ml-2 lg:hidden"
          />
          <h3 className="hidden lg:block text-black text-[24px] font-semibold capitalize">
            {displayPath}
          </h3>
        </div>
        <div className="w-2/4 hidden lg:flex flex-row items-center justify-between">
          <div className="w-2/3 bg-[#F9FAFB] flex items-center justify-start rounded-md py-2 px-4">
            <Image src={Magnifier} alt="Magnifier" width={24} height={24} />
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search here..."
              className="text-[14px] bg-transparent ml-2 outline-none focus:outline-none"
            />
          </div>
          <div className="w-1/3 ml-4">
            <LanguageSelector />
          </div>
        </div>
        <div className="w-1/2 lg:w-1/3 flex flex-row items-center justify-end cursor-pointer pl-8">
          <Image src={Notification} alt="notification" width={40} height={40} />
          <div className="w-1/2  flex items-center justify-end ml-4">
            <Image src={Profile} alt="notification" width={40} height={40} />
            <div className="w-[60%] ml-3 hidden lg:block">
              <h4 className="font-medium text-[14px]">Musfiq</h4>
              <p className="font-normal text-[12px] text-gray">Admin</p>
            </div>

            <div>
              <svg
                className={`ml-2 w-4 h-4 transition-transform `}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
