import React from "react";
import styled from "styled-components";
import footer from "../../images/footer.png";
const FooterStyles = styled.footer`
  .footer {
    &-top {
      background-image: url(${footer});
      height: 300px;
      background-color: #000;
      opacity: 0.6;
    }
  }
`;
const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer-top"></div>
    </FooterStyles>
  );
};

export default Footer;
