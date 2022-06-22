import React from "react";
import styled from "styled-components";
import HeadingSectionContent from "../HeadingSectionContent";
import EvaluateInfoAuthor from "./EvaluateInfoAuthor";

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
            <button className="p-2 slide-left bg-white border-[#1D8C74]">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.941406 6.9996H15.0591M0.941406 6.9996L6.58847 1.35254M0.941406 6.9996L6.58847 12.6467"
                  stroke="#1D8C74"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="slide-right bg-[#1D8C74] p-3 ">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0586 6.9996H0.940946M15.0586 6.9996L9.41153 1.35254M15.0586 6.9996L9.41153 12.6467"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="map-content"></div>
      </div>
    </EvaluateAndLocateStyles>
  );
};

export default EvaluateAndLocate;
