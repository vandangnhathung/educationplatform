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
            <div className="flex items-center gap-4">
              <p className="p-3 bg-[#1D8C74]">
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
              </p>{" "}
              <p className="p-3 bg-[#1D8C74]">
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1.01289C10.5957 1.1997 10.0838 1.37505 9.625 1.43334C10.0916 1.14476 10.8318 0.543713 11 0C10.5641 0.267079 9.77579 0.552313 9.26154 0.655513C8.85088 0.201623 8.26513 0 7.61613 0C6.36946 0 5.5 1.10128 5.5 2.3889V3.34446C3.66667 3.34446 1.87917 1.88866 0.766792 0.477779C0.565656 0.833383 0.460058 1.23887 0.461083 1.65168C0.461083 2.52076 1.22696 3.40275 1.83333 3.82224C1.46346 3.81029 0.763125 3.51598 0.458333 3.34446V3.37169C0.458333 4.50259 1.21963 5.27039 2.25133 5.48443C2.06296 5.53842 1.83333 5.73335 0.949667 5.73335C1.23658 6.65786 2.67896 7.14663 3.66667 7.16669C2.89392 7.79115 1.51617 8.12225 0.458333 8.12225C0.275458 8.12225 0.176458 8.13276 0 8.11126C0.99825 8.7706 2.3925 9.07781 3.66667 9.07781C7.81779 9.07781 10.0833 5.77253 10.0833 2.6899C10.0833 2.58861 10.0801 2.24939 10.0751 2.15001C10.5187 1.82416 10.6984 1.48303 11 1.01289Z"
                    fill="white"
                  />
                </svg>
              </p>{" "}
              <p className="p-3 bg-[#1D8C74]">
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
