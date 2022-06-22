import React from "react";
import styled from "styled-components";
import HeadingSectionContent from "../HeadingSectionContent";

const EvaluateAndLocateStyles = styled.div``;
const EvaluateAndLocate = () => {
  return (
    <EvaluateAndLocateStyles>
      <HeadingSectionContent type="two"></HeadingSectionContent>
      <div className="content"></div>
    </EvaluateAndLocateStyles>
  );
};

export default EvaluateAndLocate;