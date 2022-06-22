import React, { useEffect } from "react";
import headerImg from "../images/Images.png";
import SignInSocial from "./button/SignInSocial";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import styled from "styled-components";

const HeaderStyles = styled.header`
  .text-or {
    color: white;
    position: relative;
    &:before {
      content: "";
      height: 1px;
      width: calc(50% - 13px);
      background-color: white;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
    }
    &:after {
      content: "";
      height: 1px;
      width: calc(50% - 13px);
      background-color: white;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }
  }
`;
const Header = () => {
  const headerNav = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Courses",
    },
    {
      id: 3,
      title: "Pricing",
    },
    {
      id: 4,
      title: "Reviews",
    },
  ];
  return (
    <HeaderStyles>
      <div className="relative">
        <img src={headerImg} alt="header_img" className="w-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div class="absolute top-0  left-0 right-0 ">
          <div class="container">
            <div className="pt-8 mb-[79px] header-top text-white flex items-center justify-between">
              <h1 className="">Rearing</h1>
              <div className="flex items-center">
                <nav className="mr-[77px]">
                  <ul className="flex items-center  gap-x-[49px] ">
                    {headerNav.map((item) => (
                      <li className="active cursor-pointer" key={item.id}>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </nav>
                <button className="py-2 px-10 bg-[#1D8C74] text-white text-xl ">
                  Sign Up
                </button>
              </div>
            </div>

            <div className="slogan text-white mb-[70px]">
              <h3 className="text-base mb-4">
                Face the future with confidence
              </h3>
              <h1 className="desc max-w-[777px] text-[66px] leading-[77px] w-full tracking-[-0.02rem] font-medium">
                Start learning from{" "}
                <span className="inline-block mr-28 "></span>{" "}
                <p className="inline-block">the</p> world’s best institutions
              </h1>
            </div>

            <div class="flex items-start">
              <div className="signup max-w-[316px] text-center mr-[307px]">
                <SignInSocial name="Facebook"></SignInSocial>
                <SignInSocial
                  name="Google"
                  icon={<FcGoogle></FcGoogle>}
                ></SignInSocial>
                <SignInSocial
                  name="Apple"
                  icon={<BsApple style={{ color: "#000" }}></BsApple>}
                ></SignInSocial>
                <p className="text-or mb-[14px] ">Or</p>
                <div class="text-center text-white flex flex-col gap-y-[14px]">
                  <p className="text-2xl">Sign up with Email</p>
                  <p className="text-sm">
                    By signing up you agree to Rearing’s Terms of services and
                    Privacy Policy{" "}
                  </p>
                </div>
              </div>
              <div className="play">
                <div className="w-[154px] h-[154px] rounded-full bg-[#fff]/[0.3] hover:bg-[#ccc]/[1] transition-all duration-400 ease-linear relative"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
