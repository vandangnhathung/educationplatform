import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";

const SignInSocialStyles = styled.div``;
const SignInSocial = ({ name = "", icon = <BsFacebook></BsFacebook> }) => {
  return (
    <SignInSocialStyles>
      <span className="inline-block text-blue-500">{icon}</span>
      <p className="">Continue with {name}</p>
    </SignInSocialStyles>
  );
};

export default SignInSocial;
