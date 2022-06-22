import React from "react";
import styled from "styled-components";
import footer from "../../images/footer.png";
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
      </div>
    </FooterStyles>
  );
};

export default Footer;
