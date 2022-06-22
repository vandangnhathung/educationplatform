import React, { useEffect } from "react";
import headerImg from "../images/Images.png";
const Header = () => {
  const headerNav = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Courses",
    },
    {
      id: 3,
      title: "Pricing",
    },
    {
      id: 4,
      title: "Reviews",
    },
  ];
  return (
    <header>
      <div className="relative">
        <img src={headerImg} alt="header_img" className="w-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container text-white flex items-center justify-center">
          <div className="">Rearing</div>
          <div className="flex items-center justify-center">
            <nav className="mr-[77px]">
              <ul className="flex items-center justify-center gap-x-[49px] ">
                {headerNav.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ul>
            </nav>
            <button className="py-2 px-10 bg-[#1D8C74] text-white text-xl ">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
