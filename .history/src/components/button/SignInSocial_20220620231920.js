import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";

const SignInSocialStyles = styled.div``;
const SignInSocial = () => {
  return (
    <SignInSocialStyles>
      <span className="inline-block bg-blue-500">
        <BsFacebook></BsFacebook>
      </span>
    </SignInSocialStyles>
  );
};

export default SignInSocial;
