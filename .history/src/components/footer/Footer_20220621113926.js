import React from "react";
import styled from "styled-components";
import footer from "../../images/footer.png";
import HeadingSectionContent from "../../modules/content/HeadingSectionContent";
const FooterStyles = styled.footer`
  .footer {
    &-top {
      background-image: url(${footer});
      height: 300px;
    }
  }
`;
const Footer = () => {
  return (
    <FooterStyles>
      <div className="relative footer-top">
        <div className="absolute inset-0 bg-black overlay opacity-30"></div>
        <div className="container flex items-start justify-center">
          <div className="z-10 text-white ">
            <HeadingSectionContent type="two"></HeadingSectionContent>
          </div>
          <div className=""></div>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
