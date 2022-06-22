import React, { useEffect } from "react";
import headerImg from "../images/Images.png";
const Header = () => {
  return (
    <header>
      <div className="container"></div>
      <div className="relative">
        <img src={headerImg} alt="header_img" className="w-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </header>
  );
};

export default Header;
