import React from "react";
import styled from "styled-components";
import footer from "../../images/footer.png";
const FooterStyles = styled.footer`
  .footer {
    &-top {
      background-image: url(${footer});
      height: 300px;
      opacity: 0.5;
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
