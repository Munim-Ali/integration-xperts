"use client";
import React, { useState } from "react";
import enFlag from "../../public/images/siderbar-icons/enFlag.svg";
import Image from "next/image";

const LanguageSelector = () => {
  const languages = [
    { code: "en", name: "English", flag: enFlag.src },
    { code: "ru", name: "Russian", flag: enFlag.src },
    { code: "nl", name: "Dutch", flag: enFlag.src },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage] = useState("en");

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <div className="relative inline-block w-full">
        {/* Button to toggle dropdown */}
        <button
          onClick={toggleDropdown}
          className="w-full flex items-center justify-between p-2 bg-[#FEFEFE0F] rounded-md border border-[#FEFEFE33] py-3 px-6"
        >
          <div className="flex items-center">
            <Image
              src={
                languages.find((lang) => lang.code === selectedLanguage)?.flag
              }
              alt={selectedLanguage}
              width={24}
              height={24}
              className="mr-2"
            />

            <p className="text-[14px]">
              {languages.find((lang) => lang.code === selectedLanguage)?.name}
            </p>
          </div>
          <svg
            className={`ml-2 w-4 h-4 transition-transform ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
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
        </button>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div
            className={`absolute mt-2 bg-[#fff] border border-[#FEFEFE33] rounded-md py-3 px-6 w-full z-10`}
          >
            <ul className="py-2">
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  // onClick={() => handleLanguageChange(lang.code)}
                  className="flex items-center p-2 hover:bg-[#FEFEFE0F] cursor-pointer mb-1"
                >
                  <Image
                    src={lang.flag}
                    alt={lang.name}
                    className="w-6 h-6 mr-2"
                  />
                  <p className="text-[15px]">{lang.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageSelector;
