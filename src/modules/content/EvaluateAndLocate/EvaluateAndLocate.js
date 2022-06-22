import React from "react";
import styled from "styled-components";
import HeadingSectionContent from "../HeadingSectionContent";
import EvaluateInfoAuthor from "./EvaluateInfoAuthor";
import map from "../../../images/snazzy-image 1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const EvaluateAndLocateStyles = styled.div``;
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="slide-right absolute bottom-[-28%] left-[54px]  bg-[#1D8C74] border border-[#1D8C74] p-3 "
      onClick={onClick}
    >
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
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="p-3 slide-left absolute bottom-[-28%] bg-white border  border-[#1D8C74]"
      onClick={onClick}
    >
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
  );
}
const EvaluateAndLocate = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <EvaluateAndLocateStyles>
      <HeadingSectionContent type="two"></HeadingSectionContent>
      <div className="flex items-center justify-between content">
        <div className="flex flex-col items-start gap-12 evaluate">
          <div className="evaluate-content">
            <Slider className="relative max-w-[500px] w-full" {...settings}>
              <EvaluateInfoAuthor src="https://images.unsplash.com/photo-1514626585111-9aa86183ac98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"></EvaluateInfoAuthor>
              <EvaluateInfoAuthor src="https://images.unsplash.com/photo-1465409042654-5314e9d1754b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"></EvaluateInfoAuthor>
            </Slider>
          </div>
          <div className="flex items-center gap-6 evaluate-slide"></div>
        </div>

        <div className="map-content">
          <img src={map} alt="" />{" "}
        </div>
      </div>
    </EvaluateAndLocateStyles>
  );
};

export default EvaluateAndLocate;
