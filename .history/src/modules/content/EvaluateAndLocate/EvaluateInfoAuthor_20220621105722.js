import React from "react";
import styled from "styled-components";

const EvaluateInfoAuthorStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const EvaluateInfoAuthor = () => {
  return (
    <EvaluateInfoAuthorStyles>
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1492632503949-a31d9972b400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className=""></div>
    </EvaluateInfoAuthorStyles>
  );
};

export default EvaluateInfoAuthor;
