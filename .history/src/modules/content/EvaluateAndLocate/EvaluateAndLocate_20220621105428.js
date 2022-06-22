import React from "react";
import styled from "styled-components";
import HeadingSectionContent from "../HeadingSectionContent";

const EvaluateAndLocateStyles = styled.div``;
const EvaluateAndLocate = () => {
  return (
    <EvaluateAndLocateStyles>
      <HeadingSectionContent type="two"></HeadingSectionContent>
      <div className="flex items-center justify-between content">
        <div className="flex flex-col items-start gap-12 evaluate">
          <div className="evaluate-content">
            <EvaluateInfoAuthor></EvaluateInfoAuthor>
          </div>
          <div className="evaluate-slide">
            <button className="slide-left"></button>
            <button className="slide-right"></button>
          </div>
        </div>
        <div className="map-content"></div>
      </div>
    </EvaluateAndLocateStyles>
  );
};

export default EvaluateAndLocate;
