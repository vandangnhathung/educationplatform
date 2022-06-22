import React from "react";
import styled from "styled-components";
import footer from "../../images/footer.png";
const FooterStyles = styled.footer`
  background-image: url(${footer});
  height: 100px;
  background-size: 150px;
  background-repeat: none;
  width: 300px;
  height: 300px;
`;
const Footer = () => {
  return <FooterStyles></FooterStyles>;
};

export default Footer;
