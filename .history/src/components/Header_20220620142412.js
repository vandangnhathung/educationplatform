import React, { useEffect } from "react";
import headerImg from "../images/Images.png";
const Header = () => {
  const headerNav = [
    {
      id: 1,
      title: Home,
    },
    {
      id: 1,
      title: Home,
    },
    {
      id: 1,
      title: Home,
    },
    {
      id: 1,
      title: Home,
    },
  ];
  return (
    <header>
      <div className="relative">
        <img src={headerImg} alt="header_img" className="w-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container text-white">
        <div className="">Rearing</div>
        <div>
          <nav>
            <ul></ul>
          </nav>
          <button></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
