import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import Profile from "../assets/images/profile.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle , setToggle] = useState()
  const menu = [
    { name: "Home", icon: HiHome },
    { name: "Search", icon: HiMagnifyingGlass },
    { name: "Watchlist", icon: HiPlus },
    { name: "Originals", icon: HiStar },
    { name: "Movies", icon: HiPlayCircle },
    { name: "Series", icon: HiTv },
  ];

  return (
    <div className="bg-transparent w-full">
      <div className="flex items-center justify-between w-full px-8 py-4 max-w-[1200px] mx-auto">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <img src={Logo} className="w-[80px] object-cover" alt="Logo" />
        </div>

        {/* Center - Menu */}
        <div className="hidden md:flex flex gap-8 flex-grow justify-center">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className=" flex md:hidden gap-8 flex-grow justify-center">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
              )
          )}
        </div>
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
         {toggle ? <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
          {menu.map(
            (item, index) =>
              index > 2 && (
                <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
              )
          )}
          </div> :null}
        </div>
        {/* Right - Profile */}
        <div className="flex-shrink-0 ml-auto">
          <img
            src={Profile}
            className="w-[40px] h-[40px] rounded-full object-cover cursor-pointer"
            alt="Profile"
          />
        </div>
      </div>    
    </div>
  );
}   

export default Header;
