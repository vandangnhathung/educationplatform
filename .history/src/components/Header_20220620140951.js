import React, { useEffect } from "react";
import headerImg from "../images/Images.png";
const Header = () => {
  return (
    <header>
      <div className="container"></div>
      <img src={headerImg} alt="header_img" className="w-full opacity-40" />
    </header>
  );
};

export default Header;
