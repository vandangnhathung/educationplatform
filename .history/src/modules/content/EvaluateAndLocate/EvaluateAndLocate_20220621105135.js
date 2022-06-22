import React from "react";
import styled from "styled-components";
import HeadingSectionContent from "../HeadingSectionContent";

const EvaluateAndLocateStyles = styled.div``;
const EvaluateAndLocate = () => {
  return (
    <EvaluateAndLocateStyles>
      <HeadingSectionContent type="two"></HeadingSectionContent>
      <div className="flex items-center justify-between content">
        <div className="evaluate-content"></div>
        <div className="map-content"></div>
      </div>
    </EvaluateAndLocateStyles>
  );
};

export default EvaluateAndLocate;
