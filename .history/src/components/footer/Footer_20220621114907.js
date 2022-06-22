import React from "react";
import styled from "styled-components";
import footer from "../../images/footer.png";
import HeadingSectionContent from "../../modules/content/HeadingSectionContent";
const FooterStyles = styled.footer`
  .footer {
    &-top {
      background-image: url(${footer});
      height: auto;
    }
  }
`;
const Footer = () => {
  return (
    <FooterStyles>
      <div className="relative footer-top">
        <div className="absolute inset-0 bg-black overlay opacity-30"></div>
        <div className="container flex items-center justify-between py-[96px]">
          <div className="z-10 text-white ">
            <HeadingSectionContent
              type="two"
              margin="0"
            ></HeadingSectionContent>
          </div>
          <div className="z-10">
            <button className="p-4 bg-[#1D8C74] text-white font-bold text-base">
              Get Started
            </button>{" "}
            <button className="p-4 bg-[#EEBC65] text-white font-bold text-base">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="container footer-bottom"></div>
    </FooterStyles>
  );
};

export default Footer;
