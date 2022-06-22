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
      <div className="bg-black footer-bottom p-[49px]">
        <div className="container">
          <div className="flex items-center justify-between text-base text-white">
            <div className="flex items-center justify-between">
              <p className="pr-[26px] border-r-[#5F6463] border-r-2">
                Privacy Policy
              </p>
              <p className="inline-block pl-[26px]">Terms & Conditions</p>
            </div>
            <div className="">
              <p>© 2022 webdesign.gdn</p>
            </div>
            <div className="">
              <p className="p-1">
                <svg
                  width="7"
                  height="13"
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 4.65529H4.66667V2.79317C4.66667 2.27923 5.0848 2.32764 5.6 2.32764H6.53333V0H4.66667C3.92406 0 3.21187 0.29428 2.68677 0.818101C2.16167 1.34192 1.86667 2.05238 1.86667 2.79317V4.65529H0V6.98293H1.86667V12.1037H4.66667V6.98293H6.06667L7 4.65529Z"
                    fill="white"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
