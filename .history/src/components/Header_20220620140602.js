import React, { useEffect } from "react";
import styled from "styled-components";
import headerImg from "../images/Images.png";
const HeaderStyles = styled.div``;
const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <img src={headerImg} alt="" />
      </div>
    </HeaderStyles>
  );
};

export default Header;
