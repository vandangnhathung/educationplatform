import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";

const SignInSocialStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #fff;
  max-width: 316px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
`;
const SignInSocial = ({ name = "", icon = <BsFacebook></BsFacebook> }) => {
  return (
    <SignInSocialStyles>
      <span className="inline-block text-blue-500 text-xl">{icon}</span>
      <p className="">Continue with {name}</p>
    </SignInSocialStyles>
  );
};

export default SignInSocial;
